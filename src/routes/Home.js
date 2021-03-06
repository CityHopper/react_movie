import React, {useEffect, useState} from "react";
import Carousel from "../components/Carousel";

function Home() {
    const [loading, setLoading] = useState(true);
    const [upcoming, setUpcoming] = useState();

    const getUpcoming = async () => {
        const json = await (
            // await fetch(`https://yts.mx/api/v2/list_upcoming.json`)
            await fetch(`
            https://yts.mx/api/v2/list_movies.json?
            limit=5`)
        ).json()
        setUpcoming(json.data);
        setLoading(false);
    }

    useEffect(() => {
        getUpcoming();
    }, [])

    return (
        <>
            {loading
                ? (<h1 className="loading flex__center">Loading...</h1>)
                :
                <Carousel
                    loading={loading}
                    movies={upcoming}
                />
            }
        </>
    )
}


export default Home;