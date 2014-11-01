function Roulette(id, members, sound_id) {

  if (id == undefined) return;
  this.reslut_tag = document.getElementById(id);

  if (members == undefined) return;
  this.member = members;

  this.sound = undefined;
  if (sound_id != undefined) {
    this.sound = document.getElementById(sound_id);
  }

  this.now = false;
  this.lukky_guy = -1;

};

Roulette.prototype.loop = function(that, time, num){
  if (that.now == false) {
    that.reslut_tag.innerHTML = that.lukky_guy;
    that.lukky_guy = -1;
    return;
  }

  if (num == undefined) num = -1;
  num = (num + 1) % that.member.length;
  that.reslut_tag.innerHTML = that.member[num];

  if (that.sound != undefined) {
    that.sound.currentTime = 0;
    that.sound.play();
  }

  if (time == undefined) time = 50;
  time += 5;
  setTimeout(function(){
    that.loop(that, time, num);
  }, time);
};

Roulette.prototype.getRandomMember = function() {
  return this.member[Math.floor(Math.random() * this.member.length)];
};

Roulette.prototype.start = function(that) {
  if(that.member == undefined ||
     that.member.length == 0) {
    alert("No Member!");
    return;
  }

  if (that.now) return;

  that.now = true;
  that.lukky_guy = that.getRandomMember();

  setTimeout(function(){
    that.now = false;
  }, 5000);

  setTimeout(function(){
    that.loop(that);
  }, 100);
};
