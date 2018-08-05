# dynamic-reactstrap-tabs

This is an use case of displaying reactstrap tabs with capability of adding new tab from existing tab content with a simple [function][at]

For example you have a list of items displayed in tab and you click on one item. Now without losing the context of list you want to view details of item. The code illustrates how you could open a tab with item details. This can be repeated without writing any code to close, open or select a tab.

# Features

- Includes reusable [MultiTabs][mt] component. Provides simpler API to create tab based screens. There are simple functions like -

  - [addTab][at] to add a new tab. [Example][at-ex]
  - [close][ct] to close any tab. [Example][ct-ex]

  Also there are following options

  - [openTabImmediately][oti] to open newly added tab immediately. [Example][oti-ex]
  - [defaultActiveTab][att] to set the default tab.

- You don't need to make any changes to the tab content components. You could get access to the API via consumer.[Example][con]

- Automatically open newly added tab
- Ability to select which active tab

# Upcoming items

- [ ] Lazy loading of tab content
- [ ] Option to eager load tab content

[mt]: https://github.com/bmhaskar/dynamic-reactstrap-tabs/blob/master/src/components/MutiTabs.js
[at]: https://github.com/bmhaskar/dynamic-reactstrap-tabs/blob/master/src/components/MutiTabs.js#L46
[at-ex]: https://github.com/bmhaskar/dynamic-reactstrap-tabs/blob/master/src/index.js#L18
[ct]: https://github.com/bmhaskar/dynamic-reactstrap-tabs/blob/master/src/components/MutiTabs.js#L84
[ct-ex]: https://github.com/bmhaskar/dynamic-reactstrap-tabs/blob/master/src/index.js#L23
[oti]: https://github.com/bmhaskar/dynamic-reactstrap-tabs/blob/master/src/components/MutiTabs.js#L43
[oti-ex]: https://github.com/bmhaskar/dynamic-reactstrap-tabs/blob/master/src/index.js#L77
[att]: https://github.com/bmhaskar/dynamic-reactstrap-tabs/blob/master/src/index.js#L77
[con]: https://github.com/bmhaskar/dynamic-reactstrap-tabs/blob/master/src/index.js#L11
