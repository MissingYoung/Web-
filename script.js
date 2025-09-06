// 等待整个页面的HTML加载完成后再执行代码
document.addEventListener('DOMContentLoaded', function() {

    // =========================================================================
    // 功能一：联系我们页面的表单验证 (邮箱 + 电话)
    // =========================================================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // 1. 获取所有需要操作的HTML元素
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phone-error');

        // 2. 为表单的 "submit" 事件添加一个监听器
        contactForm.addEventListener('submit', function(event) {
            
            // 阻止表单的默认提交行为
            event.preventDefault();

            // 3. 重置所有错误状态
            resetErrors();

            // 4. 进行验证
            const isEmailValid = validateEmail();
            const isPhoneValid = validatePhone();

            // 5. 如果所有验证都通过，则提交表单
            if (isEmailValid && isPhoneValid) {
                alert('发送成功！');
                contactForm.reset();
                // 手动重置多选下拉框的显示状态
                const dropdown = document.querySelector('.custom-dropdown');
                if(dropdown) {
                    dropdown.querySelector('.dropdown-toggle').textContent = '请选择一个或多个主题';
                    dropdown.querySelectorAll('.selected').forEach(li => li.classList.remove('selected'));
                }
            }
        });
        
        // 辅助函数：重置所有输入框的错误提示
        function resetErrors() {
            emailError.style.display = 'none';
            emailInput.style.border = '1px solid #ccc';
            phoneError.style.display = 'none';
            phoneInput.style.border = '1px solid #ccc';
        }

        // 辅助函数：验证邮箱格式
        function validateEmail() {
            const emailValue = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValue)) {
                emailError.textContent = '邮箱格式错误，应包含 "@" 和 "."';
                emailError.style.display = 'block';
                emailInput.style.border = '1px solid #d93025';
                return false;
            }
            return true;
        }

        // 辅助函数：验证电话号码格式
        function validatePhone() {
            const phoneValue = phoneInput.value.trim();
            const phoneRegex = /^\d{11}$/; // 正则表达式：11位纯数字

            // 如果电话号码不为空，才进行验证
            if (phoneValue !== '') {
                if (!phoneRegex.test(phoneValue)) {
                    phoneError.textContent = '请输入11位纯数字的电话号码。';
                    phoneError.style.display = 'block';
                    phoneInput.style.border = '1px solid #d93025';
                    return false; // 验证失败
                }
            }
            return true; // 如果为空或格式正确，都算验证通过
        }
    }


    // =========================================================================
    // 功能二：联系我们页面的多选主题下拉框
    // =========================================================================
    const dropdown = document.querySelector('.custom-dropdown');
    if (dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        const hiddenInput = dropdown.querySelector('#subject');
        
        // 使用 Set 来存储所有被选中的主题
        const selectedThemes = new Set();
        const placeholderText = '请选择一个或多个主题';

        // 更新显示状态的函数
        function updateSelectionDisplay() {
            if (selectedThemes.size === 0) {
                toggle.textContent = placeholderText;
                hiddenInput.value = ''; 
                toggle.classList.add('placeholder-style'); // 当为空时，应用灰色样式
            } else {
                const selectedArray = Array.from(selectedThemes);
                toggle.textContent = selectedArray.join(', ');
                hiddenInput.value = selectedArray.join(',');
                toggle.classList.remove('placeholder-style'); // 当有选择时，恢复正常黑色样式
            }
            hiddenInput.dispatchEvent(new Event('change'));
        }

        // 为菜单列表添加点击事件监听器
        menu.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                const clickedLi = event.target;
                const themeName = clickedLi.textContent.trim();

                // 切换选中状态
                if (selectedThemes.has(themeName)) {
                    selectedThemes.delete(themeName);
                    clickedLi.classList.remove('selected');
                } else {
                    selectedThemes.add(themeName);
                    clickedLi.classList.add('selected');
                }
                updateSelectionDisplay();
            }
        });
        // 新增这一行至关重要：在页面加载时调用一次函数，以设置正确的初始样式
        updateSelectionDisplay();

    }


    // =========================================================================
    // 功能三：子导航栏高亮当前页面
    // =========================================================================
    const subNavLinks = document.querySelectorAll('.sub-nav a');
    if (subNavLinks.length > 0) {
        const currentPage = window.location.pathname.split('/').pop();
        subNavLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }


    // =========================================================================
    // 功能四：全站内容搜索
    // =========================================================================
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('search-results-container');

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'none';

        if (query.length < 2) return;

        const matchedResults = searchData.filter(item => 
            item.content.toLowerCase().includes(query) || (item.context && item.context.toLowerCase().includes(query))
        );

        if (matchedResults.length > 0) {
            const uniqueResults = new Map();
            matchedResults.forEach(item => {
                if (!uniqueResults.has(item.pageUrl)) {
                    uniqueResults.set(item.pageUrl, item);
                }
            });

            uniqueResults.forEach(item => {
                const regex = new RegExp(query, 'gi');
                
                let displayContent = item.content.replace(regex, `<span class="highlight">$&</span>`);
                let displayContext = item.context ? item.context.replace(regex, `<span class="highlight">$&</span>`) : '';

                const resultElement = document.createElement('a');
                resultElement.href = item.pageUrl;
                resultElement.className = 'result-item';
                resultElement.innerHTML = `
                    <h4>${item.pageTitle}</h4>
                    <p class="result-content">${displayContent}</p>
                    ${displayContext ? `<p class="result-context">${displayContext}</p>` : ''}
                `;
                resultsContainer.appendChild(resultElement);
            });

            resultsContainer.style.display = 'block';
        } else {
            resultsContainer.innerHTML = '<div class="result-item"><p>未找到相关内容。</p></div>';
            resultsContainer.style.display = 'block';
        }
    }

    if(searchButton) {
        searchButton.addEventListener('click', performSearch);
    }

    if(searchInput) {
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                performSearch();
            }
        });
    }

    // 点击页面其他地方，关闭搜索结果
    document.addEventListener('click', function(event) {
        const isClickInsideSearch = event.target.closest('.search-container') || event.target.closest('#search-results-container');
        if (!isClickInsideSearch && resultsContainer) {
            resultsContainer.style.display = 'none';
        }
    });

    // =========================================================================
    // 功能五：主页图片自动轮播
    // =========================================================================
     const carousel = document.querySelector('.carousel-container.full-width-hero');
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide-item');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        const prevBtn = carousel.querySelector('.btn-prev');
        const nextBtn = carousel.querySelector('.btn-next');
        
        let currentIndex = 0;
        const totalSlides = slides.length;
        const intervalTime = 4000; // 自动播放间隔时间延长至4秒
        let slideInterval;

        // --- 1: 动态创建小圆点 ---
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                showSlide(i);
                resetInterval();
            });
            dotsContainer.appendChild(dot);
        }
        const dots = dotsContainer.querySelectorAll('.dot');

        // --- 2: 核心的切换函数 ---
        function showSlide(index) {
            // 移除所有元素的 active 类
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // 为目标元素添加 active 类
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentIndex = index;
        }

        // --- 3: 箭头按钮功能 ---
        function showNextSlide() {
            const nextIndex = (currentIndex + 1) % totalSlides;
            showSlide(nextIndex);
        }

        function showPrevSlide() {
            const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(prevIndex);
        }

        nextBtn.addEventListener('click', () => {
            showNextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            showPrevSlide();
            resetInterval();
        });
        
        // --- 4: 自动播放功能 ---
        function startInterval() {
            slideInterval = setInterval(showNextSlide, intervalTime);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        // --- 5: 初始化 ---
        showSlide(0); // 初始显示第一张
        startInterval(); // 开始自动播放
    }

    // =========================================================================
    // 功能六：SVG 交互式地图
    // =========================================================================
    const mapObject = document.getElementById('yunnan-map-object');

    if (mapObject) {
        // 必须等待 <object> 标签加载完SVG内容
        mapObject.addEventListener('load', function() {
            // 1. 获取SVG文档内部的内容
            const svgDoc = mapObject.contentDocument;
            if (!svgDoc) return;

            // 2. 获取SVG内所有的州市路径
            const regions = svgDoc.querySelectorAll('#yunnan-province path');

            regions.forEach(region => {
                // 3. 为每个区域添加CSS类，以应用我们写好的样式
                region.classList.add('yunnan-region');

                // 4. 为每个区域绑定点击事件
                region.addEventListener('click', function() {
                    // 获取存储在 data-url 属性中的链接
                    const targetUrl = region.getAttribute('data-url');
                    
                    if (targetUrl) {
                        // 跳转到新页面
                        window.location.href = targetUrl;
                    } else {
                        console.warn(`区域 ${region.id} 没有设置 data-url`);
                    }
                });

                //  添加鼠标悬停时显示提示的效果
                region.addEventListener('mouseover', function() {
                    // 这里可以未来扩展，比如显示一个工具提示(tooltip)
                });
            });
        });
    }


    // =========================================================================
    // 功能七：页面加载后滚动到锚点并高亮
    // =========================================================================
    function scrollToAndHighlight() {
        if (window.location.hash) {
            const targetId = window.location.hash.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // 使用 setTimeout 确保页面布局稳定后再滚动
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    targetElement.classList.add('highlight-target');
                    setTimeout(() => {
                        targetElement.classList.remove('highlight-target');
                    }, 2500);
                }, 100); // 延迟100毫秒
            }
        }
    }
    scrollToAndHighlight();


});