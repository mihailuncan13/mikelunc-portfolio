import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faCameraRetro as fasCameraRetro,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

import { 
  faTwitter as fabTwitter,
  faFacebookF as faFacebookF,
  faInstagram as fabInstagram,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// solid
library.add(faSearch);
library.add(fasCameraRetro);
library.add(faVideo);

//brands
library.add(fabTwitter);
library.add(faFacebookF);
library.add(fabInstagram);

Vue.component('font-awesome-icon', FontAwesomeIcon);
