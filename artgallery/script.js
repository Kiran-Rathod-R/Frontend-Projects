 /* LIGHTBOX */

        const images = document.querySelectorAll('.item img');

        const lightbox = document.getElementById('lightbox');

        const lightboxImg = document.getElementById('lightbox-img');

        images.forEach(img => {

            img.addEventListener('click', () => {

                lightbox.style.display = 'flex';

                lightboxImg.src = img.src;

            });

        });

        document.getElementById('close').onclick = () => {

            lightbox.style.display = 'none';

        };

        lightbox.addEventListener('click', (e) => {

            if (e.target !== lightboxImg) {

                lightbox.style.display = 'none';

            }

        });


        /* DARK MODE */

        const darkBtn = document.getElementById('darkMode');

        darkBtn.addEventListener('click', () => {

            document.body.classList.toggle('dark');

            if (document.body.classList.contains('dark')) {

                darkBtn.innerText = 'Light';

            }

            else {

                darkBtn.innerText = 'Dark';

            }

        });


        /* SLIDESHOW */

        const slideshowImages = [

            "https://4kwallpapers.com/images/walls/thumbs_2t/25220.jpg",

            "https://4kwallpapers.com/images/walls/thumbs_2t/24976.png",

            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

            "https://wallpapercave.com/wp/wp5128415.jpg",

            "assets/img5.jpg",
            "assets/img6.jpg",
            "assets/img8.jpg",
            "assets/img11.jpg"

        ];

        let slideIndex = 0;

        const slideImage = document.getElementById("slide-image");

        setInterval(() => {

            slideIndex++;

            if (slideIndex >= slideshowImages.length) {

                slideIndex = 0;

            }

            slideImage.src = slideshowImages[slideIndex];

        }, 3000);


        /* SEARCH */

        const search = document.getElementById('search');

        const slideshow = document.querySelector('.slideshow-container');

        search.addEventListener('keyup', () => {

            let value = search.value.toLowerCase();

            /* HIDE SLIDESHOW WHEN SEARCHING */

            if (value !== "") {

                slideshow.style.display = "none";

            }

            else {

                slideshow.style.display = "block";

            }

            document.querySelectorAll('.item').forEach(item => {

                let text = item.innerText.toLowerCase();

                if (text.includes(value)) {

                    item.style.display = 'block';

                }

                else {

                    item.style.display = 'none';

                }

            });

        });


        /* FILTER */

        function filterImages(category) {

            const items = document.querySelectorAll('.item');

            /* HIDE SLIDESHOW FOR CATEGORY */

            if (category !== 'all') {

                slideshow.style.display = "none";

            }

            else {

                slideshow.style.display = "block";

            }

            items.forEach(item => {

                if (category === 'all') {

                    item.style.display = 'block';

                }

                else if (item.classList.contains(category)) {

                    item.style.display = 'block';

                }

                else {

                    item.style.display = 'none';

                }

            });

        }


        /* LIKE BUTTON */

        document.querySelectorAll('.like-btn').forEach(btn => {

            btn.addEventListener('click', () => {

                btn.classList.toggle('active');

            });

        });
