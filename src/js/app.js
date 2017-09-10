import { loading } from "./libs/loading.js";
import { achievement, achshow }  from "./libs/usapyon_achievement.js";
import { usapyon } from "./libs/usapyon.js";
import { ui } from "./libs/usapyon_ui.js";
import { data } from "./libs/usapyon_data.js";

$(function(){
  loading();
  usapyon();
  ui();
  data();
});

