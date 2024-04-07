var mobileNavSideBar, mobileNavButton;
var folderRoot = '';

window.onload = function()
{
	mobileNavSideBar = document.getElementById("mobile-nav-dropdown");
	mobileNavButtonImage = document.getElementById("nav-menu-btn").firstChild;
	mobileNavSideBar.style.display = "none";
};


function togglenav()
{
	mobileNavSideBar.style.display == "none" ? opennav(folderRoot) : closenav(folderRoot);
}

function opennav()
{
	mobileNavSideBar.style.display = "block";
	mobileNavButtonImage.src = folderRoot + "images/icons/close_menu.png";
}

function closenav()
{
	mobileNavSideBar.style.display = "none";
	mobileNavButtonImage.src = folderRoot + "images/icons/open_menu.png";
}

window.addEventListener("resize", function()
{
    if (document.documentElement.clientWidth > 1050) closenav();
}, true);