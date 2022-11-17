/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in `/gulp`. Any files in that directory
  get automatically required below.
  To add a new task, simply add a new task file that directory.
  `/gulp/tasks.js` specifies the default set of
  tasks to run when you run `gulp`.
*/
require('./gulp/tasks');
