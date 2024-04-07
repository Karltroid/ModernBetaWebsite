var mobileNavSideBar, mobileNavButton;

window.onload = function()
{
	mobileNavSideBar = document.getElementById("mobile-nav-dropdown");
	mobileNavButtonImage = document.getElementById("nav-menu-btn").firstChild;
	mobileNavSideBar.style.display = "none";
};


function togglenav(folderRoot)
{
	mobileNavSideBar.style.display == "none" ? opennav(folderRoot) : closenav(folderRoot);
}

function opennav(folderRoot)
{
	mobileNavSideBar.style.display = "block";
	mobileNavButtonImage.src = folderRoot + "images/icons/close_menu.png";
}

function closenav(folderRoot)
{
	mobileNavSideBar.style.display = "none";
	mobileNavButtonImage.src = folderRoot + "images/icons/open_menu.png";
}

window.addEventListener("resize", function()
{
    if (document.documentElement.clientWidth > 1050) closenav();
}, true);