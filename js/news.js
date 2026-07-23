/* =====================================================
 UKPay News System

 功能：
 1. 新闻分类筛选
 2. 新闻分页
 3. 动态生成新闻列表
 4. 文章跳转
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function () {



        /* ===============================
         新闻数据
        ================================ */


        const newsData = [


            {
                title: "越南支付市场发展趋势与企业布局策略",
                category: "行业趋势",
                date: "2026-01-05",
                time: "5分钟阅读",
                url: "news/vietnam-payment-01.html"
            },


            {
                title: "越南跨境支付需求增长与企业解决方案分析",
                category: "跨境支付",
                date: "2026-01-10",
                time: "6分钟阅读",
                url: "news/vietnam-payment-02.html"
            },


            {
                title: "越南银行支付网络发展趋势及企业接入方式分析",
                category: "支付技术",
                date: "2026-01-15",
                time: "5分钟阅读",
                url: "news/vietnam-payment-03.html"
            },


            {
                title: "跨境企业如何提升越南用户付款成功率",
                category: "跨境支付",
                date: "2026-01-20",
                time: "5分钟阅读",
                url: "news/vietnam-payment-04.html"
            },


            {
                title: "API支付接口成为企业连接越南市场的重要方式",
                category: "API技术",
                date: "2026-01-25",
                time: "6分钟阅读",
                url: "news/vietnam-payment-05.html"
            },


            {
                title: "越南电子支付发展趋势与企业支付布局策略",
                category: "金融科技",
                date: "2026-02-01",
                time: "6分钟阅读",
                url: "news/vietnam-payment-06.html"
            },


            {
                title: "越南本地收款服务如何帮助企业提升交易效率",
                category: "收款服务",
                date: "2026-02-06",
                time: "5分钟阅读",
                url: "news/vietnam-payment-07.html"
            },


            {
                title: "越南代付服务如何优化企业资金流转效率",
                category: "代付服务",
                date: "2026-02-12",
                time: "5分钟阅读",
                url: "news/vietnam-payment-08.html"
            },


            {
                title: "越南支付市场竞争加剧，企业如何选择合适支付方案",
                category: "行业分析",
                date: "2026-02-18",
                time: "6分钟阅读",
                url: "news/vietnam-payment-09.html"
            },


            {
                title: "越南数字钱包兴起对企业支付模式的影响",
                category: "数字支付",
                date: "2026-02-25",
                time: "5分钟阅读",
                url: "news/vietnam-payment-10.html"
            },


            {
                title: "越南企业数字化支付转型的发展机会分析",
                category: "金融科技",
                date: "2026-03-02",
                time: "6分钟阅读",
                url: "news/vietnam-payment-11.html"
            },


            {
                title: "越南跨境支付需求增长与企业解决方案分析",
                category: "跨境支付",
                date: "2026-03-08",
                time: "5分钟阅读",
                url: "news/vietnam-payment-12.html"
            },


            {
                title: "越南本地支付生态建设推动商业数字化发展",
                category: "支付生态",
                date: "2026-03-15",
                time: "6分钟阅读",
                url: "news/vietnam-payment-13.html"
            },


            {
                title: "越南企业如何通过支付系统提升运营效率",
                category: "企业支付",
                date: "2026-03-20",
                time: "5分钟阅读",
                url: "news/vietnam-payment-14.html"
            },


            {
                title: "越南支付技术升级推动企业业务增长",
                category: "支付技术",
                date: "2026-03-25",
                time: "5分钟阅读",
                url: "news/vietnam-payment-15.html"
            },


            {
                title: "越南本地支付渠道发展趋势与企业应用分析",
                category: "支付渠道",
                date: "2026-04-01",
                time: "6分钟阅读",
                url: "news/vietnam-payment-16.html"
            },


            {
                title: "越南支付安全体系建设与企业风险管理分析",
                category: "支付安全",
                date: "2026-04-08",
                time: "5分钟阅读",
                url: "news/vietnam-payment-17.html"
            },


            {
                title: "越南移动支付发展趋势及企业市场机会分析",
                category: "移动支付",
                date: "2026-04-15",
                time: "5分钟阅读",
                url: "news/vietnam-payment-18.html"
            },


            {
                title: "越南支付行业未来趋势与企业发展方向分析",
                category: "行业趋势",
                date: "2026-05-01",
                time: "6分钟阅读",
                url: "news/vietnam-payment-19.html"
            },


            {
                title: "越南支付生态建设趋势与企业数字化运营策略",
                category: "数字化运营",
                date: "2026-05-16",
                time: "6分钟阅读",
                url: "news/vietnam-payment-20.html"
            }


        ];







        /* ===============================
         参数
        ================================ */


        let currentCategory = "全部";

        let currentPage = 1;

        const pageSize = 6;







        /* ===============================
         获取元素
        ================================ */


        const newsGrid =
            document.querySelector(".news-grid");


        const pagination =
            document.querySelector(".pagination .container");


        const categoryButtons =
            document.querySelectorAll(
                ".news-category button"
            );






        /* ===============================
         分类按钮
        ================================ */


        categoryButtons.forEach(button => {


            button.addEventListener(
                "click",
                function () {


                    /*
                     获取按钮分类
                     */

                    currentCategory =
                        this.getAttribute(
                            "data-category"
                        );



                    /*
                     清除状态
                     */

                    categoryButtons.forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });



                    this.classList.add(
                        "active"
                    );



                    currentPage = 1;



                    loadNews();


                });


        });









        /* ===============================
         分类过滤
        ================================ */


        function getNewsByCategory() {



            if (
                currentCategory === "全部"
                ||
                !currentCategory
            ) {

                return newsData;

            }



            return newsData.filter(
                item =>

                    item.category === currentCategory

            );



        }










        /* ===============================
         加载新闻
        ================================ */


        function loadNews() {



            let list =
                getNewsByCategory();



            let start =
                (currentPage - 1)
                *
                pageSize;


            let end =
                start +
                pageSize;



            let pageData =
                list.slice(
                    start,
                    end
                );




            newsGrid.innerHTML = "";





            if (pageData.length === 0) {


                newsGrid.innerHTML = `

<div class="no-news">

暂无相关新闻内容

</div>

`;

                return;

            }






            pageData.forEach(news => {



                let card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "news-card";



                card.innerHTML = `

<div class="news-tag">

${news.category}

</div>


<h2>

<a href="${news.url}">

${news.title}

</a>

</h2>



<p>

深入分析越南支付行业发展趋势，
本地收款服务、
支付技术升级以及企业数字化运营方案。

</p>


<div class="news-meta">

<span>
${news.date}
</span>


<span>
${news.time}
</span>

</div>


`;



                newsGrid.appendChild(card);



            });




            createPagination(
                list.length
            );



        }









        /* ===============================
         分页
        ================================ */


        function createPagination(total) {



            pagination.innerHTML = "";



            let totalPage =
                Math.ceil(
                    total / pageSize
                );



            for (
                let i = 1;
                i <= totalPage;
                i++
            ) {



                let a =
                    document.createElement(
                        "a"
                    );



                a.href = "#";

                a.innerText = i;



                if (
                    i === currentPage
                ) {

                    a.classList.add(
                        "active"
                    );

                }



                a.onclick = function (e) {


                    e.preventDefault();



                    currentPage = i;



                    loadNews();



                    window.scrollTo({

                        top: 350,

                        behavior: "smooth"

                    });


                };



                pagination.appendChild(a);



            }


        }








        /* ===============================
         初始化
        ================================ */


        loadNews();



    });