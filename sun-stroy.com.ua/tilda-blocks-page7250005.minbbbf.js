window.isMobile=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){window.isMobile=!0}
function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t228__init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menuBlock=rec.querySelector('.t228');var mobileMenu=rec.querySelector('.t228__mobile');var menuSubLinkItems=rec.querySelectorAll('.t-menusub__link-item');var rightBtn=rec.querySelector('.t228__right_buttons_but .t-btn');var mobileMenuPosition=mobileMenu?mobileMenu.style.position||window.getComputedStyle(mobileMenu).position:'';var mobileMenuDisplay=mobileMenu?mobileMenu.style.display||window.getComputedStyle(mobileMenu).display:'';var isFixedMobileMenu=mobileMenuPosition==='fixed'&&mobileMenuDisplay==='block';var overflowEvent=document.createEvent('Event');var noOverflowEvent=document.createEvent('Event');overflowEvent.initEvent('t228_overflow',!0,!0);noOverflowEvent.initEvent('t228_nooverflow',!0,!0);if(menuBlock){menuBlock.addEventListener('t228_overflow',function(){t228_checkOverflow(recid)});menuBlock.addEventListener('t228_nooverflow',function(){t228_checkNoOverflow(recid)})}
rec.addEventListener('click',function(e){var targetLink=e.target.closest('.t-menusub__target-link');if(targetLink&&window.isMobile&&window.innerWidth<=980){if(targetLink.classList.contains('t-menusub__target-link_active')){if(menuBlock)menuBlock.dispatchEvent(overflowEvent)}else{if(menuBlock)menuBlock.dispatchEvent(noOverflowEvent)}}
var currentLink=e.target.closest('.t-menu__link-item:not(.tooltipstered):not(.t-menusub__target-link):not(.t794__tm-link):not(.t966__tm-link):not(.t978__tm-link):not(.t978__menu-link)');if(currentLink&&mobileMenu&&isFixedMobileMenu)mobileMenu.click()});Array.prototype.forEach.call(menuSubLinkItems,function(linkItem){linkItem.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})});if(rightBtn){rightBtn.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})}
if(menuBlock){menuBlock.addEventListener('showME601a',function(){var menuLinks=rec.querySelectorAll('.t966__menu-link');Array.prototype.forEach.call(menuLinks,function(menuLink){menuLink.addEventListener('click',function(){if(mobileMenu&&isFixedMobileMenu)mobileMenu.click()})})})}}
function t228_checkOverflow(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t228'):null;if(!menu)return;var mobileContainer=document.querySelector('.t228__mobile_container');var mobileContainerHeight=t228_getFullHeight(mobileContainer);var windowHeight=document.documentElement.clientHeight;var menuPosition=menu.style.position||window.getComputedStyle(menu).position;if(menuPosition==='fixed'){menu.classList.add('t228__overflow');menu.style.setProperty('height',(windowHeight-mobileContainerHeight)+'px','important')}}
function t228_checkNoOverflow(recid){var rec=document.getElementById('rec'+recid);if(!rec)return!1;var menu=rec.querySelector('.t228');var menuPosition=menu?menu.style.position||window.getComputedStyle(menu).position:'';if(menuPosition==='fixed'){if(menu)menu.classList.remove('t228__overflow');if(menu)menu.style.height='auto'}}
function t228_setWidth(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var menuCenterSideList=rec.querySelectorAll('.t228__centerside');Array.prototype.forEach.call(menuCenterSideList,function(menuCenterSide){menuCenterSide.classList.remove('t228__centerside_hidden')});if(window.innerWidth<=980)return;var menuBlocks=rec.querySelectorAll('.t228');Array.prototype.forEach.call(menuBlocks,function(menu){var maxWidth;var centerWidth=0;var paddingWidth=40;var leftSide=menu.querySelector('.t228__leftside');var rightSide=menu.querySelector('.t228__rightside');var menuList=menu.querySelector('.t228__list');var mainContainer=menu.querySelector('.t228__maincontainer');var leftContainer=menu.querySelector('.t228__leftcontainer');var rightContainer=menu.querySelector('.t228__rightcontainer');var centerContainer=menu.querySelector('.t228__centercontainer');var centerContainerLi=centerContainer?centerContainer.querySelectorAll('li'):[];var leftContainerWidth=t228_getFullWidth(leftContainer);var rightContainerWidth=t228_getFullWidth(rightContainer);var mainContainerWidth=mainContainer?mainContainer.offsetWidth:0;var dataAlign=menu.getAttribute('data-menu-items-align');var isDataAlignCenter=dataAlign==='center'||dataAlign===null;maxWidth=leftContainerWidth>=rightContainerWidth?leftContainerWidth:rightContainerWidth;maxWidth=Math.ceil(maxWidth);Array.prototype.forEach.call(centerContainerLi,function(li){centerWidth+=t228_getFullWidth(li)});if(mainContainerWidth-(maxWidth*2+paddingWidth*2)>centerWidth+20){if(isDataAlignCenter){if(leftSide)leftSide.style.minWidth=maxWidth+'px';if(rightSide)rightSide.style.minWidth=maxWidth+'px'}}else{if(leftSide)leftSide.style.minWidth=maxWidth+'';if(rightSide)rightSide.style.minWidth=maxWidth+''}
if(menuList&&menuList.classList.contains('t228__list_hidden'))menuList.classList.remove('t228__list_hidden')})}
function t228_getFullWidth(el){if(!el)return 0;var marginLeft=el.style.marginLeft||window.getComputedStyle(el).marginLeft;var marginRight=el.style.marginRight||window.getComputedStyle(el).marginRight;marginLeft=parseInt(marginLeft,10)||0;marginRight=parseInt(marginRight,10)||0;return el.offsetWidth+marginLeft+marginRight}
function t228_getFullHeight(el){if(!el)return 0;var marginTop=el.style.marginTop||window.getComputedStyle(el).marginTop;var marginBottom=el.style.marginBottom||window.getComputedStyle(el).marginBottom;marginTop=parseInt(marginTop,10)||0;marginBottom=parseInt(marginBottom,10)||0;return el.offsetHeight+marginTop+marginBottom}
function t794_init(recid){var rec=document.getElementById('rec'+recid);var menu=rec?rec.querySelector('.t794'):null;var hook=menu?menu.getAttribute('data-tooltip-hook'):'';if(!hook)return;var hookLinks=document.querySelectorAll('a[href="'+hook+'"]');hookLinks=Array.prototype.filter.call(hookLinks,function(hookLink){var isSubmenuAllowed=hookLink.getAttribute('data-submenu-disallowed')!=='yes';if(isSubmenuAllowed){hookLink.classList.add('t794__tm-link');hookLink.setAttribute('data-tooltip-menu-id',recid);return!0}
return!1});var parentMenu=hookLinks.length?hookLinks[0].closest('[data-menu]'):null;var tooltipMenu=rec.querySelector('.t794__tooltip-menu');var isParentFixed=parentMenu&&window.getComputedStyle(parentMenu).position==='fixed';if(tooltipMenu)tooltipMenu.setAttribute('data-pos-fixed',isParentFixed?'yes':'no');t794_addArrow(recid,hookLinks);t794_setUpMenu(recid,hookLinks);t_onFuncLoad('t_submenublocks__highlightActiveLinks',function(){t_submenublocks__highlightActiveLinks('.t794__list_item a')});if(menu.hasAttribute('data-full-submenu-mob')&&(window.isMobile||'ontouchend' in document)){t_onFuncLoad('t_submenublocks__setFullScreenMenu',function(){t_submenublocks__setFullScreenMenu(menu)})}}
function t794_addArrow(recid,hookLinks){var rec=document.getElementById('rec'+recid);var submenuBlock=rec?rec.querySelector('.t794'):null;var isArrowAppend=submenuBlock.getAttribute('data-add-arrow');if(!isArrowAppend)return;hookLinks=Array.prototype.slice.call(hookLinks);hookLinks.forEach(function(hookLink){var arrow=document.createElement('div');arrow.classList.add('t794__arrow');hookLink.appendChild(arrow);var isInsideZero=hookLink.closest('.tn-atom');var hasCustomBorderColor=window.getComputedStyle(hookLink).borderColor!=='rgba(0, 0, 0, 0)';if(isInsideZero&&!hasCustomBorderColor){hookLink.style.borderColor='initial';hookLink.style.border='none'}})}
function t794_setUpMenu(recid,hookLinks){var rec=document.getElementById('rec'+recid);var submenu=rec?rec.querySelector('.t794__tooltip-menu'):null;if(!submenu)return;var menuBlock=rec?rec.querySelector('.t794'):null;var verticalIndent=menuBlock.getAttribute('data-tooltip-margin');var content=submenu.querySelector('.t794__content');var hooksAndSubmenu=hookLinks.concat(submenu);if(window.innerWidth>980&&!('ontouchend' in document)){t_onFuncLoad('t_submenublocks__addEventsDesktop',function(){t_submenublocks__addEventsDesktop(submenu,hooksAndSubmenu,verticalIndent,'.t794')})}else{t_onFuncLoad('t_submenublocks__addEventsMobile',function(){t_submenublocks__addEventsMobile(submenu,hookLinks,verticalIndent,'.t794')})}
window.addEventListener('scroll',t_throttle(function(){if(content){content.addEventListener('mouseleave',function(){if(submenu.classList.contains('t794__tooltip-menu_show')){t_onFuncLoad('t_submenublocks__hideSubmenu',function(){t_submenublocks__hideSubmenu(submenu,'.t794')})}})}},300));var tooltipLinks=document.querySelectorAll('.t794__tooltip-menu a[href*="#"]');Array.prototype.forEach.call(tooltipLinks,function(tooltipLink){tooltipLink.addEventListener('click',function(){t_onFuncLoad('t_submenublocks__hideSubmenu',function(){t_submenublocks__hideSubmenu(submenu,'.t794')});var menuList=document.querySelectorAll('.t450, .t199__mmenu, .t280, .t282, .t204__burger, .t451, .t466');Array.prototype.forEach.call(menuList,function(menu){var event=document.createEvent('Event');event.initEvent('clickedAnchorInTooltipMenu',!0,!0);menu.dispatchEvent(event)});Array.prototype.forEach.call(tooltipLinks,function(link){link.classList.remove('t-active')});tooltipLink.classList.add('t-active')})})}
function t738_init(recId){t_onFuncLoad('t_card__moveClickOnCard',function(){t_card__moveClickOnCard(recId)});t_onFuncLoad('t_card__addFocusOnTab',function(){t_card__addFocusOnTab(recId)})}
function t738_unifyHeights(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t738');if(!container)return;var items=rec.querySelectorAll('.t738__item');var maxHeight=0;for(var i=0;i<items.length;i++){items[i].style.height=''}
for(var i=0;i<items.length;i++){var itemPaddingTop=parseInt(getComputedStyle(items[i]).paddingTop)||0;var itemPaddingBottom=parseInt(getComputedStyle(items[i]).paddingBottom)||0;var imgHeight=items[i].querySelector('img').offsetHeight+itemPaddingTop+itemPaddingBottom;if(imgHeight>maxHeight){maxHeight=imgHeight}}
for(var i=0;i<items.length;i++){var itemPaddingTop=parseInt(getComputedStyle(items[i]).paddingTop)||0;var itemPaddingBottom=parseInt(getComputedStyle(items[i]).paddingBottom)||0;items[i].style.height=maxHeight+itemPaddingTop+itemPaddingBottom+'px'}
t_onFuncLoad('t_slds_updateSlider',function(){t_slds_updateSlider(recId)})}