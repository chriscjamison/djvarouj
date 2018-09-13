/* main.js - Handles any navigation and styling for index.htm */

function showMenu() {
  /* ******  ****** ****** ****** ****** ****** ****** ****** ****** ****** ******
   * 
   * Swaps the visibility of the main navigation links and menu icon
   * 
   * ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** */

  // Initializes a variable which holds a string that refers to the HTML DOM selector 
  // for the menu icon link, '#a-nav-menu'.
  var menu_link_icon_selector;

  // Initializes a jQuery Object which holds the HTML DOM element for the menu icon 
  // link.
  var menu_link_icon_element = {};

  // Passes on the HTML DOM selector, '#a-nav-menu'.
  menu_link_icon_selector = "#a-nav-menu";

  // The HTML DOM element for the menu icon link is passed on.
  menu_link_icon_element = $(menu_link_icon_selector);   
   
  // Initializes a variable which holds a string that refers to the HTML DOM selector 
  // for the HTML element which contains the main navigation, 'nav'.
  var menu_links_selector;

  // Initializes a jQuery Object which holds the HTML DOM element for the main 
  // navigation links.
  var menu_links_element = {};

  // The HTML DOM selector, 'nav', is passed on.
  menu_links_selector = "nav";

  // The HTML DOM element for the main navigation links is passed on.
  menu_links_element = $(menu_links_selector);
  
  // Initializes a variable which will hold a string which refers to the 
  // current vertical position of the browser window.
  var window_position;

  // The vertical position of the browser window is passed on.
  window_position = $(window).scrollTop();

  // Initializes a variable which will hold the height of the browser window.
  var window_height;

  // The height of the browser window is passed on.
  window_height = $(window).height();

  // Initializes variable which will hold the CSS property, 'display', of the 
  // main navigation.
  var menu_visibility_state;

  // The value of the CSS property, 'display', is passed on.
  menu_visibility_state = $(menu_links_element).hasClass("visible");

  // Initializes a Number which holds the width of the browser window.
  var window_width;

  // The width of the browser window is passed on.
  window_width = $(window).width();

  // If the width of the browser is less than or equal to 768 but greater than 414 and 
  // less than or equal to 768, an iPad, the CSS styling of the menu is modified.
  if (window_width > 414 && window_width <= 768) {
    // Initializes a String which holds the HTML selector for the main navigation.
    var nav_selector;

    // Initializes an Object which holds the jQuery object which refers to the main navigation.
    var nav_element = {};

    // The HTML selector for the HTML element holding the main navigation is passed on.
    nav_selector = "nav";

    // The jQuery object which refers to the HTML element which holds he main navigation 
    // is passed on .
    nav_element = $(nav_selector);

    // Initializes an Object which holds CSS values which shift the vertical position of the 
    // main navigation.
    var nav_top_css = {};
  } else {
    // Initializes a String which holds the HTML selector for the 
    // background for the main navigation links.
    var nav_bkgrnd_selector;

    // Initializes an Object which holds the jQuery object which 
    // refers to the background for the main navigation.
    var nav_bkgrnd_element = {};

    // The selector for the background for the main navigation, '#nav-bkgrnd', 
    // is passed on.
    nav_bkgrnd_selector = "#nav-bkgrnd";

    // The jQuery object which refers to the background for the main navigation 
    // is passed on.
    nav_bkgrnd_element = $(nav_bkgrnd_selector);
  }

  // If the value of 'menu_visibility_state' is 'hide', the main navigation 
  // menu links are hidden and the menu icon link is displayed. Otherwise, 
  // the menu icon link is hidden and the main navigation menu links are 
  // displayed.
  if (window_position === 0)  {
    if (menu_visibility_state === false) {
      // If the width of the browser is greater than 414 but less than or equal to 768, an iPad 
      // the CSS styling of the menu is modified.
      if (window_width > 414 && window_width <= 768) {
        // A value for a CSS property is passed on. The value adjusts the vertical position 
        // of the main navigation while the browser is anywhere but the top of the webpage.
        nav_top_css = {
          top: "6.25rem"
        };

        // The vertical position of the main navigation is altered to fit a tablet browser.
        $(nav_element).css(nav_top_css);
      }

      // The menu icon link is hidden by removing the reference
      // to the CSS class, 'visible', and adding the class, 'not_visible'.
      $(menu_link_icon_element).removeClass("visible");
      $(menu_link_icon_element).addClass("not_visible");

      // The main navigation is displayed by removing the references 
      // to the CSS class, 'not_visible' and adding the class, 'visible'.
      $(menu_links_element).removeClass("not_visible");
      $(menu_links_element).addClass("visible");
    } else {
      // The menu icon link is hidden by removing the reference
      // to the CSS class, 'visible', and adding the class, 'not_visible'.
      $(menu_link_icon_element).removeClass("visible");
      $(menu_link_icon_element).addClass("not_visible");
    }
  } else {
    if (menu_visibility_state === true) {
console.log("true");
      // If the width of the window is equal to or less than 414, the main navigation menu is placed 
      // at the bottom of the browser.
      if (window_width <= 414) {
        // Initializes a String which holds a new title for the main menu to replace the main menu icon.
        var main_menu_title;

        // The word, 'Menu', is passed on.
        main_menu_title = "Menu";

        // The new title of the main menu is added to the link which used to be the icon for the main 
        // navigation menu.
        $(menu_link_icon_element).html(main_menu_title);

        // The main menu icon is made visible by removing the CSS class, 'not_visible', 
        // and adding the class, 'visible'.
        $(menu_link_icon_element).removeClass("not_visible");
        $(menu_link_icon_element).addClass("visible");

        // The main navigation is hidden by removing the references 
        // to the CSS class, 'visible', and adding the class, 'not_visible'.
        $(menu_links_element).removeClass("visible");
        $(menu_links_element).addClass("not_visible");
      }

      // The value of the CSS property, 'background-position', is passed on.
      background_position_value = $(menu_link_icon_element).css("backgroundPosition");

      // Initializes a String which holds the value of the CSS property, 'background-position', 
      // for the main menu icon. The String will be searched for within the value of the variable, 
      // 'background_position_value'.
      var background_position_search_string;

      // The string which represents the background position for the 'click' state 
      // of the main menu icon is passed on.
      background_position_search_string = "-100px";

      if (background_position_value.indexOf(background_position_search_string) > -1)  {
        // A value which will shift the link state of the main menu icon to the default state is passed on.
        menu_link_css = {
          backgroundPosition: "-50px 0px"
        };

        // Initializes a Boolean which is set to, 'true', if the main menu icon is visible.
        var is_menu_link_icon_visible;

        // The value, 'false', is passed on to prevent a computing error.
        is_menu_link_icon_visible = false;

        // The value, 'true', is passed on if the main menu icon is visible.
        is_menu_link_icon_visible = $(menu_link_icon_element).hasClass("visible");

        // If the main menu icon is not visible, it is made visible.
        if (is_menu_link_icon_visible === false)  {
          // The main menu icon is made visible by removing the CSS class, 'not_visible', 
          // and adding the class, 'visible'.
          $(menu_link_icon_element).removeClass("not_visible");
          $(menu_link_icon_element).addClass("visible");
        }
        
        // The link state of the main menu icon is shifted.
        $(menu_link_icon_element).css(menu_link_css);

        // The main navigation is hidden by removing the references 
        // to the CSS class, 'visible', and adding the class, 'not_visible'.
        $(menu_links_element).removeClass("visible");
        $(menu_links_element).addClass("not_visible");
      } else if (window_width <= 414) {
        // The background for the main navigation is made visible by removing 
        // the CSS class, 'not_visible', and adding the class, 'visible'.
        $(nav_bkgrnd_element).removeClass("visible");
        $(nav_bkgrnd_element).addClass("not_visible");
        
        // The main navigation is hidden by removing the references 
        // to the CSS class, 'visible', and adding the class, 'not_visible'.
        $(menu_links_element).removeClass("visible");
        $(menu_links_element).addClass("not_visible");
      } else {
        // The main navigation is hidden by removing the references 
        // to the CSS class, 'visible', and adding the class, 'not_visible'.
        $(menu_links_element).removeClass("visible");
        $(menu_links_element).addClass("not_visible");

        // The menu icon link is displayed by removing the reference
        // to the CSS class, 'not_visible' and adding the class, 'visible'.
        $(menu_link_icon_element).removeClass("not_visible");
        $(menu_link_icon_element).addClass("visible");
      } 
    } else {
console.log("false");
      // The value of the CSS property, 'background-position', is passed on.
      background_position_value = $(menu_link_icon_element).css("backgroundPosition");
      
      // The string which represents the background position for the 'hover' state 
      // of the main menu icon is passed on.
      background_position_search_string = "-50px";

      if (background_position_value.indexOf(background_position_search_string) > -1)  {
        // If the width of the browser is greater than 414 but less than or equal to 768, an iPad, 
        // the CSS styling of the menu is modified.
        if (window_width > 414 && window_width <= 768) {
          // A value for a CSS property is passed on. The value adjusts the vertical position 
          // of the main navigation while the browser is anywhere but the top of the webpage.
          nav_top_css = {
            top: "11rem"
          };

          // The vertical position of the main navigation is altered to fit a tablet browser.
          $(nav_element).css(nav_top_css);
        }

        menu_link_css = {
          backgroundPosition: "-100px 0px"
        };

        // The link state of the main menu icon is shifted.
        $(menu_link_icon_element).css(menu_link_css);

        // The main navigation is displayed by removing the references 
        // to the CSS class, 'not_visible' and adding the class, 'visible'.
        $(menu_links_element).removeClass("not_visible");
        $(menu_links_element).addClass("visible");
      } else if (window_width <= 414) {
        // The background for the main navigation is made not visible by removing 
        // the CSS class, 'not_visible', and adding the class, 'visible'.
        $(nav_bkgrnd_element).removeClass("visible");
        $(nav_bkgrnd_element).addClass("not_visible");
      } else {
        // The string which represents the background position for the 'click' state 
        // of the main menu icon is passed on.
        background_position_search_string = "-100px";

        if (background_position_value.indexOf(background_position_search_string) > -1)  {
          // A value which will shift the link state of the main menu icon is passed on.
          menu_link_css = {
            backgroundPosition: "-50px 0px"
          };

          // The link state of the main menu icon is shifted.
          $(menu_link_icon_element).css(menu_link_css);
  
          // The main navigation is displayed by removing the references 
          // to the CSS class, 'not_visible' and adding the class, 'visible'.
          $(menu_links_element).removeClass("not_visible");
          $(menu_links_element).addClass("visible");
        }
      }
    }
  }
} // END OF FUNCTION showMenu


$(document).ready(
  function () {
    // Initializes a variable which will hold a string which refers to the 
    // current vertical position of the browser window.
    var window_position;

    // The vertical position of the browser window is passed on.
    window_position = $(window).scrollTop();

    // Initializes a variable which will hold the height of the browser window.
    var window_height;

    // The height of the browser window is passed on.
    window_height = $(window).height();

    // Initializes a variable which will hold the value of an expression which defines 
    // the vertical position within the webpage that will hide or show the main 
    // navigation links.
    var menu_visible_range;

    // Passes on the result of dividing the height of the browser window by 2.
    menu_visible_range = Math.round(window_height / 5);

    showMenu();

    /* 
      Segment of code which triggers the change in color of the links contained 
      in the main navigation menu.
    */

    // Initalizes a variable which contains the CSS selector for the links contained 
    // in the main navigation.
    var nav_links_selector;

    // Initializes a jQuery object which will contain the HTML DOM elements for the 
    // links contained in the main navigation.
    var nav_links_elements = {};

    // The HTML selector, 'nav > a', is passed on to 'nav_links_selector'.
    nav_links_selector = "nav > a, #hire-links > a";

    // The HTML DOM element is passed on to the jQuery Object variable, 
    // 'nav_links_elements'.
    nav_links_elements = $(nav_links_selector);
    
    // This jQuery Method is triggered when a visitor moves the cursor over the links 
    // contained in the main navigation. The color of the link will be made 
    // brighter and the underline displayed underneath the link will be removed.
    $(nav_links_elements).mouseenter(
      function () {

        // Initializes an Object which contains the HTML DOM element for the link the 
        // visitor has moved the cursor over.
        var link_element = {};

        // The HTML DOM element which refers to the link is passed on.
        link_element = this;

        // Initializes a variable which will contain a string which refers to the 
        // RGB value of the color the link will shift to.
        var active_color;

        active_color = "rgb(208, 255, 226)";

        // Initializes an Object which refers to a CSS value for the property, 'text-decoration'.
        var link_css = {};

        // The CSS property of 'text-decoration' is set to 'none'.
        link_css = {
          textDecoration: "none"
        };

        /* **** The color of the link is changes to the 'hover' state and the 
                underline is removed. **** 
                
                * The value, '150', refers to the amount of milliseconds the 
                * various animation functions take place.                    */
        $(link_element).animate({
          color: active_color
        }, 100)
        .delay(100)
        .css(link_css);
      }
    );

    // This jQuery Method is triggered when a visitor moves the cursor away from 
    // the links contained in the main navigation. The color of the link will return 
    // to their default appearance.
    $(nav_links_elements).mouseleave(
      function () {

        // Initializes an Object which contains the HTML DOM element for the link the 
        // visitor has moved the cursor away from.
        var link_element;

        // The HTML DOM element which refers to the link is passed on to 'link_element'.
        link_element = this;

        // Initializes an Object which refers to a CSS value for the property, 'text-decoration'.
        var link_css = {};

        // The CSS property of 'text-decoration' is set to 'underline'.
        link_css = {
          textDecoration: "underline"
        };

        // Initializes a variable which will contain a string which refers to the 
        // RGB value of the color the link will shift back to.
        var base_color;

        base_color = "rgb(117, 239, 164)";

        /* **** The color of the link is changes to the 'base' state and the 
                underline is added. **** 
                
                * The value, '300', refers to the amount of milliseconds the 
                * various animation function take place. 
                * The value, '250', refers to the amount of milliseconds of 
                * a delay until the underline is added to the link.            */
        $(link_element).animate({
          color: base_color
        }, 300);

        setTimeout(
          function () {
            $(link_element).css(link_css);
          }, 250);
      }
    );

    // This jQuery Method is triggered when a visitor a link contained in the 
    // main navigation. The color of the link clicked will return to the default 
    // color and the link will be made bold. All other links will be returned 
    // to their default appearance.
    $(nav_links_elements).click(
      function () {

        // Initializes an Object which contains the HTML DOM element for the link the 
        // visitor has moved the cursor away from.
        var link_element;

        // The HTML DOM element which refers to the link is passed on to 'link_element'.
        link_element = this;

        // Initializes a String which holds the HTML selector of the parent element 
        // of the link which is clicked.
        var parent_id_value;

        // The HTML selector of the parent element of the link being clicked is passed on.
        parent_id_value = $(link_element).parent().attr("id");

        // Initalizes a variable which contains the CSS selector for the links contained 
        // in the main navigation.
        var all_links_selector;

        // Initializes a jQuery object which will contain the HTML DOM elements for the 
        // links contained in the main navigation.
        var all_links_elements = {};

        // If the parent element of the links under processing is the element containing the  
        // main navigation, the value of 'all_links_selector will be, 'nav > a'. 
        // Otherwise, if the parent element of the link being clicked is 'hire-links', the 
        // links under processing will be the link contained in the 'Hire DJ Varouj' section.
        if (parent_id_value === undefined)  {
          // The HTML DOM selector, 'nav > a', is passed on.
          all_links_selector = "nav > a";
        } else {
          // The HTML DOM selector, '#hire-links > a', is passed on.
          all_links_selector = "#hire-links > a";
        }
      
        // The HTML DOM element which refers to all of the links contained within 
        // the main navigation is passed on.
        all_links_elements = $(all_links_selector);

        $(all_links_elements).removeClass("current_section");

        /* **** The underline of the link which has been clicked is removed, 
                and the text will be bold. **** 

                * The value, '250', refers to the amount of milliseconds of 
                * a delay until the underline is added to the link.            */

        if (all_links_selector === "nav > a") {
          $(link_element).addClass("current_section");
          setTimeout(
            function () {
              showMenu();
            }, 500);
        } else {
          $(link_element).addClass("current_section");
        }
      }
    );

    // Initializes String which holds the HTML selector for the main menu icon.
    var menu_link_icon_selector;

    // Initializes an Object which holds the jQuery object for the HTML DOM element 
    // for the main menu icon.
    var menu_link_icon_element = {};

    // The HTML selector for the main menu icon, '#a-nav-menu', is passed on.
    menu_link_icon_selector = "#a-nav-menu";

    // The jQuery object for the HTML DOM element which refers to the main menu 
    // icon is passed on.
    menu_link_icon_element = $(menu_link_icon_selector);

    // This jQuery Method is triggered when a visitor hovers over the main menu 
    // icon. The background of the main menu icon will change to reflect 
    // the 'hover' state of the link.
    $(menu_link_icon_element).mouseenter(
      function () {
        // Initializes a String which holds the HTML selector for the main menu icon.
        var main_menu_icon_selector;

        // Initializes an Object which holds the jQuery object for the HTML DOM element 
        // which refers to the main menu icon.
        var main_menu_icon_element = {};

        // The HTML selector for the main menu icon, '#a-nav-menu', is passed on.
        main_menu_icon_selector = "#a-nav-menu";

        // The jQuery object which refers to the main menu icon is passed on.
        main_menu_icon_element = $(main_menu_icon_selector);

        // Initializes a String which holds the value of the 'background-position' 
        // CSS property for the main menu icon.
        var background_position_value;

        // The value of the CSS property, 'background-position', is passed on.
        background_position_value = $(menu_link_icon_element).css("backgroundPosition");

        // Initializes a String which holds the value of the CSS property, 'background-position', 
        // for the main menu icon. The String will be searched for within the value of the variable, 
        // 'background_position_value'.
        var background_position_search_string;

        // A string which represents the 'base' link state of the main menu icon, which will 
        // be searched for within 'background_position_value", is passed on.
        background_position_search_string = "0px 0px";

        // Initializes a Number which holds the location within, 'background_position_value', of the 
        // string held by 'background_position_search_string'.
        var background_position_index_value;

        // The location of the string held by 'background_position_search_string', within, 
        // 'background_position_value', is passed on.
        background_position_index_value = background_position_value.indexOf(background_position_search_string);

        // Initializes a Boolean which will be made true if the main menu icon is currently in the 
        // 'base' link state.
        var is_link_in_base_state;

        // A value of 'false' is passed on to ensure that the link state is only changed if it is 
        // currently in the 'base' state.
        is_link_in_base_state = false;

        // If the main menu icon is currently in the 'base' state, 'in_link_in_base_state' will be 
        // made true.
        if (background_position_index_value > -1) {
          is_link_in_base_state = true;
        } else {
          // A string which represents the 'base' link state of the main menu icon, but is 
          // refered to by, '0% 0%', which will be searched for within 
          // 'background_position_value', is passed on.
          background_position_search_string = "0% 0%";

          // The location of the string held by 'background_position_search_string', within, 
          // 'background_position_value', is passed on.
          background_position_index_value = background_position_value.indexOf(background_position_search_string);

          // If the main menu icon is currently in the 'base' state, 'in_link_in_base_state' will be 
          // made true.
          if (background_position_index_value > -1) {
            is_link_in_base_state = true;
          }
        }
        // Initializes an Object which will holds a CSS value of the main menu icon.
        var main_menu_link_hover_css = {};

        // A CSS value which refers to the 'hover' link state for the menu icon is passed on.
        main_menu_link_hover_css = {
          backgroundPosition: "-50px 0px"
        };

        // If the main menu icon is currently in the 'base' state, the link state will shift to the 
        // 'hover' state.
        if (is_link_in_base_state === true) {
          // A string which represents the 'clicked' link state of the main menu icon will be searched 
          // for within 'background_position_value', is passed on.
          background_position_search_string = "-100px 0px";

          // The location of the string held by 'background_position_search_string', within, 
          // 'background_position_value', is passed on.
          background_position_index_value = background_position_value.indexOf(background_position_search_string);

          // If the main menu icon is not in the 'clicked' link state, the link state will be changed 
          // to the 'hover' link state.

          if (background_position_index_value === -1) {
            // The link state for the main menu icon is changed from the 'base' state to the 'hover' 
            // state.
            $(main_menu_icon_element).css(main_menu_link_hover_css);
          } 
        }
      }
    );

    // This jQuery Method is triggered when a visitor moves the cursor away from the main menu 
    // icon. The background of the main menu icon will change to reflect 
    // the 'base' state of the link.
    $(menu_link_icon_element).mouseleave(
      function () {
        // Initializes a String which holds the HTML selector for the main menu icon.
        var main_menu_icon_selector;

        // Initializes an Object which holds the jQuery object for the HTML DOM element 
        // which refers to the main menu icon.
        var main_menu_icon_element = {};

        // The HTML selector for the main menu icon, '#a-nav-menu', is passed on.
        main_menu_icon_selector = "#a-nav-menu";

        // The jQuery object which refers to the main menu icon is passed on.
        main_menu_icon_element = $(main_menu_icon_selector);

        // Initializes a String which holds the value of the 'background-position' 
        // CSS property for the main menu icon.
        var background_position_value;

        // The value of the CSS property, 'background-position', is passed on.
        background_position_value = $(menu_link_icon_element).css("backgroundPosition");

        // Initializes a String which holds the value of the CSS property, 'background-position', 
        // for the main menu icon. The String will be searched for within the value of the variable, 
        // 'background_position_value'.
        var background_position_search_string;

        // A string which represents the 'base' link state of the main menu icon, which will 
        // be searched for within 'background_position_value", is passed on.
        background_position_search_string = "-50px 0px";

        // Initializes a Number which holds the location within, 'background_position_value', of the 
        // string held by 'background_position_search_string'.
        var background_position_index_value;

        // The location of the string held by 'background_position_search_string', within, 
        // 'background_position_value', is passed on.
        background_position_index_value = background_position_value.indexOf(background_position_search_string);

        // If the main menu icon is currently in the 'base' state, 'in_link_in_base_state' will be 
        // made true.
        if (background_position_index_value > -1) {
          // Initializes an Object which will holds a CSS value of the main menu icon.
          var main_menu_link_base_css = {};

          // A CSS value which refers to the 'hover' link state for the menu icon is passed on.
          main_menu_link_base_css = {
            backgroundPosition: "0px 0px"
          };
       
          $(main_menu_icon_element).css(main_menu_link_base_css);
        } 
      }
    );

    // Initializes a Number which holds the width of the browser window.
    var width_of_window;

    // The width of the browser window is passed on.
    width_of_window = $(window).width();

    // If the width of the browser is less than 414px, a mobile phone browser, the following 
    // jQuery method, which will toggle the visiblity of the background of the main menu, 
    // is triggered.
    if (width_of_window <= 414) {
      // This jQuery Method is triggered when a visitor clicks the 'Menu' link to activate the 
      // main navigation menu. The visibility of the background for the main navigation will be 
      // toggled on or off.
      $(menu_link_icon_element).click(
        function () {
          // Initializes a String which holds the HTML selector for the 
          // background for the main navigation links.
          var nav_bkgrnd_selector;

          // Initializes an Object which holds the jQuery object which 
          // refers to the background for the main navigation.
          var nav_bkgrnd_element = {};

          // The selector for the background for the main navigation, '#nav-bkgrnd', 
          // is passed on.
          nav_bkgrnd_selector = "#nav-bkgrnd";

          // The jQuery object which refers to the background for the main navigation 
          // is passed on.
          nav_bkgrnd_element = $(nav_bkgrnd_selector);

          // Initializes a Boolean which is set to true if the background for the 
          // main navigation is visible.
          var is_nav_bkgrnd_visible;

          // The value, 'false', is passed on to prevent a computing error.
          is_nav_bkgrnd_visible = false;

          // The value, 'true', is passed on if the background for the main navigation 
          // is visible.
          is_nav_bkgrnd_visible = $(nav_bkgrnd_element).hasClass("visible");

          // If the background for the main navigation is visible, the background will 
          // be made not visible. Otherwise, the background will be made visible.
          if (is_nav_bkgrnd_visible === true) {
            // The background for the main navigation is made not visible by removing 
            // the CSS class, 'visible', and adding the class, 'not_visible'.
            $(nav_bkgrnd_element).removeClass("visible");
            $(nav_bkgrnd_element).addClass("not_visible");
          } else {
            // The background for the main navigation is made visible by removing 
            // the CSS class, 'not_visible', and adding the class, 'visible'.
            $(nav_bkgrnd_element).removeClass("not_visible");
            $(nav_bkgrnd_element).addClass("visible");
          }
        }
      );
    }
    
    
    // Initializes a String which holds the HTML selector for the links within the 'Hire DJ Varouj' 
    // section.
    var hire_content_links_selector;

    // Initializes an Object which holds the jQuery object for the HTML DOM element 
    // which refers to the links within the 'Hire DJ Varouj' section.
    var hire_content_links_elements = {};

    // The HTML selector for the HTML selector for the links within the 'Hire DJ Varouj' section 
    // is passed on.
    hire_content_links_selector = "#hire-links > a";

    // The jQuery object which refers to the links within the 'Hire DJ Varouj' section is 
    // passed on.
    hire_content_links_elements = $(hire_content_links_selector);

    // This jQuery Method is triggered when a visitor clicks a link which refers to a service 
    // offered in the 'Hire DJ Varouj' section. 
    // The content contained within the HTML element, '#hire-content', will change to correspond 
    // with the link clicked.
    $(hire_content_links_elements).click(
      function () {
        // Initializes an Object which holds the jQuery object which refers to the link which was 
        // clicked.
        var link_element = {};

        // The jQuery object which refers to the link which was clicked is passed on.
        link_element = this;

        // Initializes a String which holds the HTML selector of the link which was clicked.
        var link_selector_value;

        // The value of the HTML selector of the link which was clicked was passed on.
        link_selector_value = $(link_element).attr("id");

        // Initializes a String which holds the category of content the the link which was clicked 
        // referred to.
        var link_category_value;

        // The category of the content the link which was clicked referred to, found by slicing the 
        // segment of the HTML selector of the link following the second '-' (e.g. - '#a-hire-XXXX'), 
        // is passed on.
        link_category_value = link_selector_value.slice(link_selector_value.lastIndexOf("-") + 1);

        // Initializes a String which holds the HTML selector which refers to the content within the 
        // 'Hire DJ Varouj' section.
        var hire_content_selector;

        // Initializes an Object which holds the jQuery object which refers to the links within the 
        // 'Hire DJ Varouj' section.
        var hire_content_elements = {};

        // The HTML selector for the links within the 'Hire DJ Varouj' section is passed on.
        hire_content_selector = ".hire-content-ctgry, .hire-packages-ctgry";

        // The jQuery object for the links within the 'Hire DJ Varouj' section is passed on.
        hire_content_elements = $(hire_content_selector);

        // The content is hidden by removing the references 
        // to the CSS class, 'visible', and adding the class, 'not_visible'.
        $(hire_content_elements).removeClass("visible");
        $(hire_content_elements).addClass("not_visible");

        // Initializes a String which holds the HTML selector which refers to the category of 
        // content the link which was clicked refers to.
        var hire_content_visible_selector;

        // Initializes an Object which holds the jQuery object which refers to the category 
        // of content the link which was clicked refers to.
        var hire_content_visible_elements = {};

        // The HTML selector which refers to the category of content the link which was clicked 
        // refers to is assembled by concatenating, '#hire-content-', and the value held in 
        // 'link_category_value', is passed on.
        hire_content_visible_selector = "#hire-content-" + link_category_value + ", #hire-packages-" + link_category_value;

        // The jQuery object which refers to the category of content the the link which was 
        // clicked to is passed on.
        hire_content_visible_elements = $(hire_content_visible_selector);

        // The content is made visible by removing the CSS class, 'not_visible', 
        // and adding the class, 'visible', to the HTML elements held in 'hire_content_visible_element'.
        $(hire_content_visible_elements).removeClass("not_visible");
        $(hire_content_visible_elements).addClass("visible");
      }
    );

    $(window).scroll(
      function () {
        
        // Initializes a variable which will hold a string which refers to the 
        // current vertical position of the browser window.
        var window_position;

        // The vertical position of the browser window is passed on.
        window_position = $(window).scrollTop();

        // Initializes a variable which will hold the height of the browser window.
        var window_height;

        // The height of the browser window is passed on.
        window_height = $(window).height();

        // Initializes a variable which will hold the value of an expression which defines 
        // the vertical position within the webpage that will hide or show the main 
        // navigation links.
        var menu_visible_range;

        // Passes on the result of dividing the height of the browser window by 5.
        menu_visible_range = Math.round(window_height / 5);
        
        if (window_position === 0 || (window_position > menu_visible_range && window_position < (window_height - menu_visible_range))) {
          showMenu();
        } 
      }
    );
  }
);