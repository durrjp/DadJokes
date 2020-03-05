import { useDadJokes } from "./DadJokeProvider.js";
import { DadJoke } from "./DadJoke.js";


DadJoke
useDadJokes

const contentTarget = document.querySelector(".jokeContainer")

export const DadJokeList = () => {
    const dadjokes = useDadJokes()
    for (const joke of dadjokes) {
        contentTarget.innerHTML += DadJoke(joke)
    }
}