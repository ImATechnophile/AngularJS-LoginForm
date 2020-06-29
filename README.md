# AngularJS-LoginForm
  A simple login form with client side form validation.
## Used angular services:
  - $model
  - $log
### Short description about $model:
`$modal` is a service to quickly create AngularJS-powered modal windows.
Creating custom modals is straightforward: create a partial view, its controller and reference them when using the service.

The `$modal` service has only one method: `open(options)` where available options are like follows:

* `templateUrl` - a path to a template representing modal's content
* `template` - inline template representing the modal's content
* `scope` - a scope instance to be used for the modal's content (actually the `$modal` service is going to create a child scope of a provided scope). Defaults to `$rootScope`
* `controller` - a controller for a modal instance - it can initialize scope used by modal. Accepts the "controller-as" syntax in the form 'SomeCtrl as myctrl'; can be injected with `$modalInstance`
* `controllerAs` - an alternative to the controller-as syntax, matching the API of directive definitions. Requires the `controller` option to be provided as well
* `bindToController` - when used with `controllerAs` & set to `true`, it will bind the controller properties onto the `$scope` directly
* `resolve` - members that will be resolved and passed to the controller as locals; it is equivalent of the `resolve` property for AngularJS routes
* `animation` - set to false to disable animations on new modal/backdrop. Does not toggle animations for modals/backdrops that are already displayed.
* `backdrop` - controls presence of a backdrop. Allowed values: true (default), false (no backdrop), `'static'` - backdrop is present but modal window is not closed when clicking outside of the modal window.
* `keyboard` - indicates whether the dialog should be closable by hitting the ESC key, defaults to true
* `backdropClass` - additional CSS class(es) to be added to a modal backdrop template
* `windowClass` - additional CSS class(es) to be added to a modal window template
* `windowTemplateUrl` - a path to a template overriding modal's window template
* `size` - optional suffix of modal window class. The value used is appended to the `modal-` class, i.e. a value of `sm` gives `modal-sm`

Global defaults may be set for `$modal` via `$modalProvider.options`.

The `open` method returns a modal instance, an object with the following properties:

* `close(result)` - a method that can be used to close a modal, passing a result
* `dismiss(reason)` - a method that can be used to dismiss a modal, passing a reason
* `result` - a promise that is resolved when a modal is closed and rejected when a modal is dismissed
* `opened` - a promise that is resolved when a modal gets opened after downloading content's template and resolving all variables
* `rendered` - a promise that is resolved when a modal is rendered. 

In addition the scope associated with modal's content is augmented with 2 methods:

* `$close(result)`
* `$dismiss(reason)`

Those methods make it easy to close a modal window without a need to create a dedicated controller.

Finally, a `modal.closing` event is broadcast to the modal scope before the modal closes.  If the listener calls 
preventDefault on the event, then the modal will remain open.  The $close and $dismiss methods return true if the 
event was allowed.  The event itself includes a parameter for the result/reason and a boolean parameter that indicates
whether the modal is being closed (true) or dismissed.

### ScreenShots:
- First page:
![firstpage](https://user-images.githubusercontent.com/35361302/38087309-471c2a8a-3375-11e8-904c-8aacf07b6ed7.png)
- $model view:
![model](https://user-images.githubusercontent.com/35361302/38087641-7ad5cf06-3376-11e8-95f6-a9aa4fc49127.png)
- Form validation(invalid):
![invaliddata](https://user-images.githubusercontent.com/35361302/38087322-53326f28-3375-11e8-9cf9-0cac616eb3c3.png)
- Form validation(valid):
![valid](https://user-images.githubusercontent.com/35361302/38087329-59b0ac48-3375-11e8-8d07-7a4573d799eb.png)
- Single data added:
![firstadd](https://user-images.githubusercontent.com/35361302/38087356-6a3b9870-3375-11e8-8170-688d321d70e3.png)
- Multiple datas added:
![moredata](https://user-images.githubusercontent.com/35361302/38087364-70db5f08-3375-11e8-89f2-b34e12432a03.png)
- Grid view(after clicking show button):
![showtable](https://user-images.githubusercontent.com/35361302/38087381-787cf582-3375-11e8-8442-816e8b9e96f2.png)
- Selecting the details:
![checklist](https://user-images.githubusercontent.com/35361302/38087391-7e721c92-3375-11e8-8d13-51da9347aa4a.png)
- Selected value showed as a JSON:
![jsonfull](https://user-images.githubusercontent.com/35361302/38087399-873ddfd2-3375-11e8-821a-94c70c8653e9.png)

## Authors

* **Saravana Prakash** - *Initial work* - [Projects in python](https://bitbucket.org/ImATechnophile-Personal/)
* **Linkedin** - *Saravana Prakash* - [About myself](https://www.linkedin.com/in/saravana-prakash-j-116035124/)



