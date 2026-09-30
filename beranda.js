/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileToggle =
    document.getElementById("mobileToggle");

const navMenu =
    document.getElementById("navMenu");

if (mobileToggle && navMenu) {

    mobileToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle("open");

            const icon =
                mobileToggle.querySelector("i");

            if (navMenu.classList.contains("open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }
    );


    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove("open");

                    const icon =
                        mobileToggle.querySelector("i");

                    if (icon) {

                        icon.classList.remove("fa-xmark");
                        icon.classList.add("fa-bars");

                    }

                }
            );

        });

}


/* =====================================================
   NAV ACTIVE SAAT SCROLL
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }
);


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element =>
        revealObserver.observe(element)
);


/* =====================================================
   MATERI TAB
===================================================== */

const materialTabs =
    document.querySelectorAll(".material-tab");

const materialPanels =
    document.querySelectorAll(".material-panel");


materialTabs.forEach(tab => {

    tab.addEventListener(
        "click",
        () => {

            const target =
                tab.dataset.material;


            materialTabs.forEach(
                item =>
                    item.classList.remove("active")
            );


            materialPanels.forEach(
                panel =>
                    panel.classList.remove("active")
            );


            tab.classList.add("active");


            const panel =
                document.querySelector(
                    `[data-panel="${target}"]`
                );


            if (panel) {

                panel.classList.add("active");

            }

        }
    );

});


/* =====================================================
   TIMELINE INTERAKTIF
===================================================== */

const timelineItems =
    document.querySelectorAll(".timeline-item");

const timelineImage =
    document.getElementById("timelineImage");

const timelineImageYear =
    document.getElementById("timelineImageYear");

const timelineTitle =
    document.getElementById("timelineTitle");

const timelineDescription =
    document.getElementById("timelineDescription");

const timelineFact =
    document.getElementById("timelineFact");

const timelineDetail =
    document.getElementById("timelineDetail");


const timelineData = {

    "1613": {

        title:
            "Awal Pemerintahan Sultan Agung",

        description:
            "Pada tahun 1613, Sultan Agung mulai memerintah Kerajaan Mataram Islam. Di bawah kepemimpinannya, Mataram berkembang menjadi salah satu kerajaan besar di Pulau Jawa.",

        fact:
            "Awal pemerintahan Sultan Agung menjadi titik penting dalam perkembangan Mataram.",

        image:
            "awal_pemerintahan.jpg"

    },


    "1628": {

        title:
            "Serangan Pertama ke Batavia",

        description:
            "Pada tahun 1628, pasukan Mataram melakukan serangan terhadap Batavia yang dikuasai VOC. Serangan ini menjadi bagian dari upaya Sultan Agung menghadapi kekuatan VOC di Jawa.",

        fact:
            "Pasukan Mataram bergerak menuju Batavia untuk menghadapi VOC.",

        image:
            "serangankebatavia.jpg"

    },


    "1629": {

        title:
            "Serangan Kedua ke Batavia",

        description:
            "Pada tahun 1629, Sultan Agung kembali mengirim pasukan untuk menyerang Batavia. Serangan kedua menunjukkan kegigihan Mataram dalam menghadapi VOC.",

        fact:
            "Serangan kedua dilakukan setahun setelah ekspedisi pertama.",

        image:
            "seranganke2.jpg"

    },


    "1645": {

        title:
            "Akhir Pemerintahan Sultan Agung",

        description:
            "Sultan Agung wafat pada tahun 1645 setelah memimpin Mataram selama lebih dari tiga dekade. Masa pemerintahannya meninggalkan pengaruh penting dalam sejarah Mataram.",

        fact:
            "Tahun 1645 menandai berakhirnya masa pemerintahan Sultan Agung.",

        image:
            "akhir_pemerintahan.jpg"

    }

};


timelineItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            const year =
                item.dataset.year;

            const data =
                timelineData[year];

            if (!data) return;


            timelineItems.forEach(
                btn =>
                    btn.classList.remove("active")
            );

            item.classList.add("active");


            if (timelineDetail) {

                timelineDetail.style.opacity =
                    "0";

                timelineDetail.style.transform =
                    "translateY(15px)";

            }


            setTimeout(() => {

                if (timelineTitle) {

                    timelineTitle.textContent =
                        data.title;

                }


                if (timelineDescription) {

                    timelineDescription.textContent =
                        data.description;

                }


                if (timelineFact) {

                    timelineFact.textContent =
                        data.fact;

                }


                if (timelineImage) {

                    timelineImage.src =
                        data.image;

                    timelineImage.alt =
                        `Peristiwa tahun ${year}`;

                }


                if (timelineImageYear) {

                    timelineImageYear.textContent =
                        year;

                }


                if (timelineDetail) {

                    timelineDetail.style.opacity =
                        "1";

                    timelineDetail.style.transform =
                        "translateY(0)";

                }

            }, 220);


            if (
                window.innerWidth <= 768 &&
                timelineDetail
            ) {

                setTimeout(() => {

                    timelineDetail.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 300);

            }

        }
    );

});


/* =====================================================
   PETA INTERAKTIF
===================================================== */

const mapLocations =
    document.querySelectorAll(".map-location");

const mapInfo =
    document.getElementById("mapInfo");

const mapInfoTitle =
    document.getElementById("mapInfoTitle");

const mapInfoText =
    document.getElementById("mapInfoText");


const locationData = {

    mataram: {

        title:
            "Mataram",

        text:
            "Mataram menjadi pusat kekuasaan Sultan Agung dan menjadi titik penting dalam perkembangan Kerajaan Mataram Islam."

    },


    batavia: {

        title:
            "Batavia",

        text:
            "Batavia menjadi sasaran serangan Mataram pada tahun 1628 dan 1629 dalam menghadapi kekuatan VOC."

    }

};


mapLocations.forEach(location => {

    location.addEventListener(
        "click",
        () => {

            const name =
                location.dataset.location;

            const data =
                locationData[name];

            if (!data) return;


            if (mapInfo) {

                mapInfo.style.opacity =
                    "0";

                mapInfo.style.transform =
                    "translateY(10px)";

            }


            setTimeout(() => {

                if (mapInfoTitle) {

                    mapInfoTitle.textContent =
                        data.title;

                }


                if (mapInfoText) {

                    mapInfoText.textContent =
                        data.text;

                }


                if (mapInfo) {

                    mapInfo.style.opacity =
                        "1";

                    mapInfo.style.transform =
                        "translateY(0)";

                }

            }, 180);

        }
    );

});


/* =====================================================
   PERJUANGAN SLIDER
===================================================== */

const slider =
    document.getElementById("struggleSlider");

const prevButton =
    document.getElementById("prevSlide");

const nextButton =
    document.getElementById("nextSlide");

const sliderDots =
    document.getElementById("sliderDots");

const struggleCards =
    document.querySelectorAll(".struggle-card");


let currentSlide = 0;


function getScrollAmount() {

    if (!struggleCards.length) {

        return 0;

    }

    const card =
        struggleCards[0];

    return card.offsetWidth + 20;

}


function createSliderDots() {

    if (!sliderDots) return;

    sliderDots.innerHTML = "";

    struggleCards.forEach(
        (_, index) => {

            const dot =
                document.createElement("button");

            dot.className =
                "slider-dot";


            if (index === 0) {

                dot.classList.add("active");

            }


            dot.addEventListener(
                "click",
                () => {

                    currentSlide =
                        index;

                    updateSlider();

                }
            );


            sliderDots.appendChild(
                dot
            );

        }
    );

}


function updateSlider() {

    if (!slider) return;

    const amount =
        getScrollAmount();


    slider.scrollTo({

        left:
            amount * currentSlide,

        behavior:
            "smooth"

    });


    if (sliderDots) {

        sliderDots
            .querySelectorAll(".slider-dot")
            .forEach(
                (dot, index) => {

                    dot.classList.toggle(
                        "active",
                        index === currentSlide
                    );

                }
            );

    }

}


if (prevButton) {

    prevButton.addEventListener(
        "click",
        () => {

            currentSlide--;

            if (currentSlide < 0) {

                currentSlide =
                    struggleCards.length - 1;

            }

            updateSlider();

        }
    );

}


if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            currentSlide++;

            if (
                currentSlide >=
                struggleCards.length
            ) {

                currentSlide = 0;

            }

            updateSlider();

        }
    );

}


createSliderDots();


/* =====================================================
   FLIP CARD PENINGGALAN
===================================================== */

const heritageCards =
    document.querySelectorAll(".heritage-card");


heritageCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            card.classList.toggle("flipped");

        }
    );


    card.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                card.classList.toggle("flipped");

            }

        }
    );

});


/* =====================================================
   PARALLAX HERO
===================================================== */

const heroBackground =
    document.querySelector(".hero-background");


if (heroBackground) {

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY <
                window.innerHeight
            ) {

                heroBackground.style.transform =
                    `scale(1.03) translateY(${window.scrollY * .08}px)`;

            }

        }
    );

}


/* =====================================================
   VIDEO SLIDER
===================================================== */

const videoGallery =
    document.querySelector(".video-gallery");


if (videoGallery) {

    const videoSlides =
        videoGallery.querySelectorAll(".slide");

    const videoPrev =
        videoGallery.querySelector(".prev");

    const videoNext =
        videoGallery.querySelector(".next");


    let videoIndex = 0;


    function showVideoSlide(index) {

        videoSlides.forEach(slide => {

            slide.classList.remove("active");

        });


        if (videoSlides[index]) {

            videoSlides[index].classList.add("active");

        }

    }


    if (videoPrev) {

        videoPrev.addEventListener(
            "click",
            () => {

                videoIndex--;

                if (videoIndex < 0) {

                    videoIndex =
                        videoSlides.length - 1;

                }

                showVideoSlide(videoIndex);

            }
        );

    }


    if (videoNext) {

        videoNext.addEventListener(
            "click",
            () => {

                videoIndex++;

                if (
                    videoIndex >=
                    videoSlides.length
                ) {

                    videoIndex = 0;

                }

                showVideoSlide(videoIndex);

            }
        );

    }

}
