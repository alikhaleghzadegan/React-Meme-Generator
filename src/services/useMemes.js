import { useState, useEffect } from "react";
import axios from "axios";

const useMemes = function () {

    const [memes, setMemes] = useState([]);

    useEffect(() => {
        const fetchMemes = async () => {
            try {
                await axios
                    .get("https://api.imgflip.com/get_memes")
                    .then((result) => setMemes(result.data.data.memes));
            } catch (e) {
                console.log(e.message);
            }
        };
        fetchMemes();
    }, []);

    return memes;
};

export default useMemes;