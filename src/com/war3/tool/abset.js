/** war3 ability setting
技能快捷方案
模板化设定
*/

/*
-- 热键 - 普通
if (!passive)
  abher.Hotkey = "Q"
-- 热键 - 学习
abher.Researchhotkey = "Q"
if (closes){
  -- 热键 -关闭
  abher.Unhotkey = "Q"
  -- 按钮位置 - 关闭 (X)
  abher.UnButtonpos_1 = 0
  -- 按钮位置 - 关闭 (Y)
  abher.UnButtonpos_2 = 2
}
-- 按钮位置 - 普通 (X)
abher.Buttonpos_1 = 0
-- 按钮位置 - 普通 (Y)
abher.Buttonpos_2 = 2
-- 按钮位置 - 研究 (X)
abher.Researchbuttonpos_1 = 0
-- 按钮位置 - 研究 (Y)
abher.Researchbuttonpos_2 = 0
*/
// 位置 q(0,2)w(1,2)e(2,2)r(3,2)d(1,1)f(2,1)
function qwerdf(abher, loc = 1, passive = false, closes = false){
    switch(loc){
      case 1 :
        if (!passive)
          abher.Hotkey = "Q"
        abher.Researchhotkey = "Q"
        if (closes){
          abher.Unhotkey = "Q"
          abher.UnButtonpos_1 = 0
          abher.UnButtonpos_2 = 2
        }
        abher.Buttonpos_1 = 0
        abher.Buttonpos_2 = 2
        abher.Researchbuttonpos_1 = 0
        abher.Researchbuttonpos_2 = 0
        break;
      case 2 :
        if (!passive)
          abher.Hotkey = "W"
        abher.Researchhotkey = "W"
        if (closes){
          abher.Unhotkey = "W"
          abher.UnButtonpos_1 = 1
          abher.UnButtonpos_2 = 2
        }
        abher.Buttonpos_1 = 1
        abher.Buttonpos_2 = 2
        abher.Researchbuttonpos_1 = 1
        abher.Researchbuttonpos_2 = 0
        break;
      case 3 :
        if (!passive)
          abher.Hotkey = "E"
        abher.Researchhotkey = "E"
        if (closes){
          abher.Unhotkey = "E"
          abher.UnButtonpos_1 = 2
          abher.UnButtonpos_2 = 2
        }
        abher.Buttonpos_1 = 2
        abher.Buttonpos_2 = 2
        abher.Researchbuttonpos_1 = 2
        abher.Researchbuttonpos_2 = 0
        break;
      case 4 :
        if (!passive)
          abher.Hotkey = "R"
        abher.Researchhotkey = "R"
        if (closes){
          abher.Unhotkey = "R"
          abher.UnButtonpos_1 = 3
          abher.UnButtonpos_2 = 2
        }
        abher.Buttonpos_1 = 3
        abher.Buttonpos_2 = 2
        abher.Researchbuttonpos_1 = 3
        abher.Researchbuttonpos_2 = 0
        break;
      case 5 :
        if (!passive)
          abher.Hotkey = "D"
        abher.Researchhotkey = "D"
        if (closes){
          abher.Unhotkey = "D"
          abher.UnButtonpos_1 = 1
          abher.UnButtonpos_2 = 1
        }
        abher.Buttonpos_1 = 1
        abher.Buttonpos_2 = 1
        abher.Researchbuttonpos_1 = 0
        abher.Researchbuttonpos_2 = 1
        break;
      case 6 :
        if (!passive)
          abher.Hotkey = "F"
        abher.Researchhotkey = "F"
        if (closes){
          abher.Unhotkey = "F"
          abher.UnButtonpos_1 = 2
          abher.UnButtonpos_2 = 1
        }
        abher.Buttonpos_1 = 2
        abher.Buttonpos_2 = 1
        abher.Researchbuttonpos_1 = 1
        abher.Researchbuttonpos_2 = 1
        break;
    }
}

exports.obj = {
  qwer(abher, loc = 1, passive = false, closes = false){
    if (loc > 4 || loc < 1){
      loc = 1;
    }
    qwerdf(abher, loc, passive, closes);
  }
  , df(abher, loc = 1, passive = false, closes = false){
    if (loc > 6 || loc < 5){
      loc = 5;
    }
    qwerdf(abher, loc, passive, closes);
  }
  , BuffID(abher, level = 0, buff){
    for(var i = 0; i < level; i ++){
      if (Array.isArray(abher.BuffID) == false)
        abher.BuffID = [];
      abher.BuffID[i] = buff;
    }
  }
  
}