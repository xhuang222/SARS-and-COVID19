window.onload=function() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/Country_15934074191600/COVID19_1?:language=en&:retry=yes&:display_count=y&:origin=viz_share_link",
        options = {
        
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
}

