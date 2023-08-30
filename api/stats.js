// process.env.HAX_STATS

fetch(process.env.HAX_STATS).then((res) => {
    res.json().then((data) => {
        console.log(data);
    });
    }
);