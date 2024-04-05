var mobileNavSideBar;

window.onload = function()
{
	mobileNavSideBar = document.getElementById("mobile-nav-dropdown");
	closenav();
};


function togglenav()
{
	mobileNavSideBar.style.display == "none" ? opennav() : closenav();
}

function opennav()
{
	mobileNavSideBar.style.display = "block";
}

function closenav()
{
	mobileNavSideBar.style.display = "none";
}

window.addEventListener("resize", function()
{
    if (document.documentElement.clientWidth > 1050) closenav();
}, true);