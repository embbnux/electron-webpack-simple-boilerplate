import { remote } from 'electron';
alert(remote.getGlobal('sharedObject').appName);
