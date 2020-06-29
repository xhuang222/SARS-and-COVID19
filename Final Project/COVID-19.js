window.onload=function() {
    var containerDiv = document.getElementById("COVID19"),
        url = "https://public.tableau.com/views/covid_19_15934070544640/COVID_19_mortality_rate?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
        options = {
            
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
}