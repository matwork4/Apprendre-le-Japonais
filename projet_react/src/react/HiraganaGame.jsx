import '../styles/game.css';

let page, idPage;
page = document.location.href;
idPage = page.substring(page.lastIndexOf("?") + 1, page.lastIndexOf("?") + 2);

if (idPage == 1) {
    console.log("id=1");
}


const HiraganaGame = () => {
    return (

        <div>


            {/* <td>{idPage}</td> */}
            <button class="voc" onclick="" > あ < br /> a</button >
            <button class="voc">い<br />i</button>
            <button class="voc">う<br />u</button>
            <button class="voc">え<br />e</button>
            <button class="voc">お<br />o</button>

        </div>

    );
};
export default HiraganaGame;