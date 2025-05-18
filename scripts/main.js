// Define the global docs object if it doesn't exist
if (typeof docs === 'undefined') {
    window.docs = {};
}

// Variable to store the sidebar data once loaded
let sideBarData = [];

// Track current page
let currentPage = "home";

function toggleSubMenu(event, li) {
    event.preventDefault();
    event.stopPropagation();
    
    const subMenu = li.querySelector('ul');
    const headerLink = li.querySelector('a.section-header');
    
    if (subMenu) {
        subMenu.classList.toggle('collapsed');
        headerLink.classList.toggle('collapsed');
    }
}

function createMenuItem(item) {
    const li = document.createElement("li");
    let icon = item.icon ? `<i class="${item.icon}"></i> ` : "";
    
    // Check if this is a section header (has subItems)
    const isSection = item.subItems && item.subItems.length > 0;

    // Create main link
    const mainLink = document.createElement("a");
    
    if (isSection) {
        // This is a section header
        mainLink.classList.add("section-header");
        mainLink.innerHTML = `${icon}${item.title} <i class="fa-solid fa-chevron-down toggle-icon"></i>`;
        mainLink.onclick = (e) => toggleSubMenu(e, li);
    } else {
        // This is a regular item with a page
        mainLink.setAttribute("data-page", item.page);
        mainLink.innerHTML = `${icon}${item.title}`;
        mainLink.onclick = () => loadContent(item.page);
    }
    
    li.appendChild(mainLink);

    // Create submenu if exists
    if (item.subItems && item.subItems.length > 0) {
        const ul = document.createElement("ul");
        
        item.subItems.forEach((subItem) => {
            const subLi = document.createElement("li");
            const subLink = document.createElement("a");
            subLink.setAttribute("data-page", subItem.page);
            subLink.innerHTML = subItem.title;
            subLink.onclick = () => loadContent(subItem.page);
            subLi.appendChild(subLink);
            ul.appendChild(subLi);
        });
        
        li.appendChild(ul);
    }

    return li;
}

function loadContent(page) {
    currentPage = page;
    const container = document.getElementById("content-container");
    
    // Check if the content exists in the docs object
    if (docs[page]) {
        container.innerHTML = docs[page];
        console.log(`Loaded content for ${page}`);
    } else {
        console.warn(`Content for ${page} not found`);
        container.innerHTML = `<div style="display:flex; justify-content: center; align-items:center;"><h1>Content Coming Soon</h1></div>`;
    }

    // Scroll the scrollable container to top
    const scrollContainer = document.querySelector('.content');
    if (scrollContainer) {
        scrollContainer.scrollTop = 0;
    }

    // Update active state in sidebar
    updateSidebarActiveState(page);
    updateNavigationButtons();
}

// Function to update the active state in the sidebar
function updateSidebarActiveState(page) {
    // Remove active class from all links
    const allLinks = document.querySelectorAll('#sidebarMenu a');
    allLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the current page link
    const currentLink = document.querySelector(`#sidebarMenu a[data-page="${page}"]`);
    if (currentLink) {
        currentLink.classList.add('active');
        
        // If it's a submenu item, make sure its parent section is visible
        const parentUl = currentLink.closest('ul');
        if (parentUl) {
            const parentSection = parentUl.previousElementSibling;
            if (parentSection && parentSection.classList.contains('section-header')) {
                // Make sure the submenu is expanded
                parentUl.classList.remove('collapsed');
                parentSection.classList.remove('collapsed');
            }
        }
    }
}

function getFlattenedItems() {
    let flatItems = [];
    sideBarData.forEach(item => {
        if (item.page) {
            flatItems.push(item);
        }
        if (item.subItems) {
            flatItems = flatItems.concat(item.subItems);
        }
    });
    return flatItems;
}

function goToPreviousPage() {
    const flatItems = getFlattenedItems();
    const currentIndex = flatItems.findIndex(item => item.page === currentPage);
    if (currentIndex > 0) {
        loadContent(flatItems[currentIndex - 1].page);
    }
}

function goToNextPage() {
    const flatItems = getFlattenedItems();
    const currentIndex = flatItems.findIndex(item => item.page === currentPage);
    if (currentIndex < flatItems.length - 1) {
        loadContent(flatItems[currentIndex + 1].page);
    }
}

function updateNavigationButtons() {
    const flatItems = getFlattenedItems();
    const currentIndex = flatItems.findIndex(item => item.page === currentPage);
    
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    
    if (prevButton) {
        prevButton.disabled = currentIndex <= 0;
    }
    if (nextButton) {
        nextButton.disabled = currentIndex >= flatItems.length - 1;
    }
}

// Initialize the application when the page loads
window.onload = function() {
    // First load the sidebar data, then initialize the page
    fetch("sideBarData.json")
        .then((response) => response.json())
        .then((data) => {
            sideBarData = data;
            const menu = document.getElementById("sidebarMenu");
            menu.innerHTML = ''; // Clear existing content

            data.forEach((item) => {
                menu.appendChild(createMenuItem(item));
            });

            // Load initial content
            const initialPage = data[0]?.page || 'home';
            loadContent(initialPage);
            
            // Log available pages for debugging
            console.log('Available pages:', Object.keys(docs));
        })
        .catch((error) => console.error("Error loading sidebar:", error));
};

const scripts = [
  'home.js', 'coreConcepts.js', 'properties.js', 'realWorldUseCase.js', 'keyTypes.js',
  'layers.js', 'solVsEth.js', 'installation.js',
  'solana.js', 'ethereum.js', 'ethereumOverview.js', 
  'introToWebJs.js','dataType.js', 'eventErr.js', 'contractStruct.js',
  'erc/tokens.js', 'erc/nonFungToken.js', 'erc/multiToken.js',
  'erc/interact.js', 'erc/deployToken.js', 'erc/build.js',
  'solOverview/solArchitecture.js', 'solOverview/simpleDapp.js',
  'solOverview/introToSyntax.js', 'solOverview/framework.js', 'solOverview/clientIntegration.js', 'solOverview/deploySolProgram.js',
  'frontendIntegration.js','backendServices.js','eventListing.js','buildDapp.js',
  'advanceSol.js', 'optimization.js',  'defi.js', 'advanceEth.js', 'deploySPLTok.js',
  'commonVul.js', 'auditSmartCont.js', 'secAccControl.js', 'deploySmartCon.js', 'monitorTool.js',
  'integratingThirdParty.js'
];

scripts.forEach(script => {
  const tag = document.createElement('script');
  tag.src = `scripts/${script}`;
  document.body.appendChild(tag);
});
