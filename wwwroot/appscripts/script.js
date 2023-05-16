
window.AppScripts = {
    initializeLayout: function () {
        $(document).ready(function () {

            //$(document).on('mouseenter', '.list-items', function () {
            //    var link = $(this).children('.sub-menu');
            //    var offset = link.offset();
            //    var top = offset.top;
            //    var bottom = $(window).height() - top - link.height();
            //    //if (top <= 30 && bottom <= 30) {
            //    //    $(this).children('.sidebar-submenu').removeClass('top_pos').addClass('center_pos');

            //    //}
            //    if (bottom <= 20) {
            //        $(this).children('.sub-menu').addClass('top_pos').removeClass('center_pos');
            //        /*alert(bottom <= 20)*/

            //    }

            //    if (top <= 20) {
            //        $(this).children('.sub-menu').removeClass('top_pos center_pos');
            //        /*alert(bottom <= 20)*/

            //    }

            //    if (bottom <= 10) {
            //        $(this).children('.sub-menu').removeClass('top_pos').addClass('center_pos');
            //    }

            //});

            //$(document).on('mouseleave', '.list-items', function () {
            //    var link = $(this).children('.sub-menu');
            //    var offset = link.offset();
            //    var top = offset.top;
            //    var bottom = $(window).height() - top - link.height();
            //    if (bottom <= 20) {
            //        $(this).children('.sub-menu').removeClass('top_pos');
            //        /*alert(bottom <= 20)*/
            //    }
            //    else {
            //        $(this).children('.sub-menu').removeClass('top_pos');

            //    }

            //});

            //let arrow = document.querySelectorAll(".arrow");
            //for (var i = 0; i < arrow.length; i++) {
            //    arrow[i].addEventListener("click", (e) => {
            //        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
            //        arrowParent.classList.toggle("showMenu");
            //    });
            //}

            // Navigation open close

            let sidebar = document.querySelector("#sidebar");
            let sidebarBtn = document.querySelector("#toggle");

            sidebarBtn.onclick = function () {
                console.log('toggle');
                sidebar.classList.toggle('close');
            };

            // User Logout
            $(document).ready(function () {
                $(".userlogin").click(function () {
                    $(this).find(".profile-menu").slideToggle("fast");
                });
            });
            $(document).on("click", function (event) {
                var $trigger = $(".userlogin");
                if ($trigger !== event.target && !$trigger.has(event.target).length) {
                    $(".profile-menu").slideUp("fast");
                }
            });

            // Navigation active
            $(document).ready(function () {
                $('ul li').click(function () {
                    $('li').removeClass("active");
                    $(this).addClass("active");
                });
            });


        })
    },
    initializeScript: function () {
        $(document).ready(function () {
            const accordionItemHeaders = document.querySelectorAll(".figmainhead");
            accordionItemHeaders.forEach(accordionItemHeader => {
                accordionItemHeader.addEventListener("click", event => {
                    const currentlyActiveAccordionItemHeader = document.querySelector(".figmainhead.active");
                    if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
                        currentlyActiveAccordionItemHeader.classList.toggle("active");
                        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
                    }
                    accordionItemHeader.classList.toggle("active");
                    const accordionItemBody = accordionItemHeader.nextElementSibling;
                    if (accordionItemHeader.classList.contains("active")) {
                        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                    }
                    else {
                        accordionItemBody.style.maxHeight = 0;
                    }
                });
            });
        })
    },
    initializeChart: function () {
        $(document).ready(function () {
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['NADP & NMSA', '10000 FPO', 'TNIAMP Phase - I', 'TNIAMP Phase II', 'TNIAMP Phase III'],
                    datasets: [{
                        label: 'One',
                        data: [250, 50, 50, 120, 70],
                        barPercentage: 0.8,
                        categoryPercentage: 0.3,
                        backgroundColor: '#FFC068',
                    }, {
                        label: 'Two',
                        data: [240, 50, 50, 240, 150],
                        barPercentage: 0.8,
                        categoryPercentage: 0.3,
                        backgroundColor: '#30846B',
                    }, {
                        label: 'Three',
                        data: [10, 20, 15, 10, 30],
                        barPercentage: 0.8,
                        categoryPercentage: 0.3,
                        backgroundColor:'#BEE0CD',
                    },]
                },
                options: {
                    animations: {
                        tension: {
                            duration: 10000,
                            easing: 'easeInSine',
                            loop: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                            labels: {
                                font: {
                                    size: 12,
                                }
                            }
                        },
                        title: {
                            display: true,
                            position: 'bottom',
                            text: 'Name of the Scheme',
                            color: '#484848',
                            padding: {
                                top: 20,
                                bottom: 15,
                            },
                            font: {
                                size:14,
                            },
                        },
                    },
                    scales: {
                        xAxes: [{
                            barPercentage: 0.2
                        }],
                        yAxes: [{
                            barPercentage: 0.2
                        }],
                        y: {
                            type: 'linear',
                            beginAtZero: true,
                            min: 0,
                            max: 300,
                            grid: {
                                display: false,
                            },
                        },
                        x: {
                            grid: {
                                display: false,
                            },
                        },
                    },
                }
            });
        });
        $(document).ready(function () {
            const ctx = document.getElementById('piechart');
            new Chart(ctx, {
                type: 'pie',
                labels: ['NADP & NMSA', '10000 FPO', 'TNIAMP Phase - I', 'TNIAMP Phase - II', 'TNIAMP Phase - III'],
                data: {
                    datasets: [{
                        data: [400, 50, 50, 120, 10],
                        barPercentage: 0.8,
                        categoryPercentage: 0.3,
                        backgroundColor: ['#30846B', '#75CA9B', '#5FAD95', '#92D1BD', '#BEE0CD'] 
                    },]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animations: {
                        tension: {
                            duration: 10000,
                            easing: 'easeInSine',
                            loop: true
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    size: 12,
                                }
                            }
                        },
                    },
                    scales: {
                        xAxes: [{
                            barPercentage: 0.2
                        }],
                        yAxes: [{
                            barPercentage: 0.2
                        }],
                        y: {
                            type: 'linear',
                            grid: {
                                display: false,
                            },
                            display: false,
                        },
                        x: {
                            grid: {
                                display: false,
                            },
                            display: false,
                        },
                    },
                }
            });
        });
    }
}
