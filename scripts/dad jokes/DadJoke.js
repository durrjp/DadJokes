export const DadJoke = (joke) => {
    return `
        <section class="joke flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <p class="joke__item">${joke.question}</p>
                </div>
                <div class ="flip-card-back">
                    
                    <p class="joke__item">${joke.answer}</p>
                </div>
            <div>
        </section>
    `
}