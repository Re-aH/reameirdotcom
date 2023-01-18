import { Helmet } from "react-helmet"

const UpbeatMetronome = () => {

    return (
        <div>
            <Helmet>
                <title>Upbeat Metronome</title>
                <meta name="description" content="A FREE online metronome with a pendulum that goes up and down, to help the player to better visualize an up-beat and a down-beat." />
            </Helmet>
            <iframe title="Upbeat Metronome" src="https://re-ah.github.io/Upbeat-Metronome/">

            </iframe>
        </div>
    )
}

export default UpbeatMetronome