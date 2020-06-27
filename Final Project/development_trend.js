window.onload=function() {
    var containerDiv = document.getElementById("development_trend"),
        url = "https://public.tableau.com/views/Tableau2_15931950127330/compare_byday?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
        options = {
            hideTabs: true,
            hideToolbar: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
}