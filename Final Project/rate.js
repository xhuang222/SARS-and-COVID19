window.onload=function() {
    var containerDiv = document.getElementById("rate"),
        url = "https://public.tableau.com/views/OverviewofSARSRate/SARS_rate?:language=en&:display_count=y&:origin=viz_share_link",
        options = {
            
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
}