export const DadJoke = (joke) => {
    return `
        <section class="joke">
            <p class="joke__Header">Joke #${joke.id}<p>
            <p class="joke__item">${joke.question}</p>
            <p class="joke__item">${joke.answer}</p>
        </section>
    `
}