
        var el = document.querySelector("#text");
        var text = "Conheça nossa iniciativa!"
        var interval = 100;
        function showtext(el, text, interval) {
            var char = text.split("").reverse();
            var typer = setInterval(function() {
                if (!char.length) {
                    return clearInterval(typer);
                }
                var next = char.pop();
                el.innerHTML += next;
            }, interval);
        }
        showtext(el, text, interval);

        const modal = document.getElementById("myModal");
        const closeBtn = document.querySelector(".close");

        // Exibir o modal automaticamente após 3 segundos
        setTimeout(() => {
            modal.style.display = "block";
        }, 3000);

        closeBtn.onclick = function() { modal.style.display = "none"; }
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

        let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel img');
    index += step;

    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel img');
    index += step;

    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    const carousel2 = document.querySelector('.carousel');
    carousel2.style.transform = `translateX(-${index * 100}%)`;
}

