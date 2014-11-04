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

Roulette.prototype.loop = function(time, num){
  if (this.now == false) {
    this.reslut_tag.innerHTML = this.lukky_guy;
    this.lukky_guy = -1;
    return;
  }

  if (num == undefined) num = -1;
  num = (num + 1) % this.member.length;
  this.reslut_tag.innerHTML = this.member[num];

  if (this.sound != undefined) {
    this.sound.currentTime = 0;
    this.sound.play();
  }

  if (time == undefined) time = 50;
  time += 5;

  that = this;
  setTimeout(function(){
    that.loop(time, num);
  }, time);
};

Roulette.prototype.getRandomMember = function() {
  return this.member[Math.floor(Math.random() * this.member.length)];
};

Roulette.prototype.start = function() {
  if(this.now) return;
  if(this.member == undefined ||
     this.member.length == 0) {
    alert("No Member!");
    return;
  }

  if (this.now) return;

  this.now = true;
  this.lukky_guy = this.getRandomMember();
  that = this;

  setTimeout(function(){
    that.now = false;
  }, 5000);

  setTimeout(function(){
    that.loop();
  }, 100);
};

Roulette.prototype.updateMember = function(array) {
  if(this.now) return;
  this.member = array;
};
