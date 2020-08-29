<template>
  <div id="app">
    <div class="container">
      <div class="col-12 mt-5">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a href="#" class="nav-link active">Live &amp; Upcoming</a>
          </li>
          <li class="nav-item result">
            <a href="#" class="nav-link">Result</a>
          </li>
        </ul>
        <div class="card">
          <div class="card-body mt-5">
            <div class="row live-row m-5 border-bottom" v-for="live in lives" v-bind:key="live">
              <div class="col-3">
                <div class="live">
                  <h2>
                    <span>live</span>
                    {{live.subtitle}}
                  </h2>
                  <p class="liveup">
                    {{live.venue.location}}
                    <br />
                    {{live.venue.name}}
                    <br />
                    {{new Date(live.date_start).toLocaleTimeString()}}
                  </p>
                </div>
              </div>
              <!-- <div class="col-1"></div> -->
              <div class="col-2 team-name">
                <h4 class="h-title">{{live.teama.name}}</h4>
                <h5 class="score">{{live.teama.scores_full}}</h5>
              </div>
              <div class="col-1">
                <img id="itemimage" :src="live.teama.logo_url" />
              </div>
              <div class="col-1 live-h1">VS</div>
              <div class="col-1">
                <img id="itemimage" :src="live.teamb.logo_url" />
              </div>
              <div class="col-2 team-name">
                <h4 class="h-title">{{live.teamb.name}}</h4>
                <h5 class="score">{{live.teamb.scores_full}}</h5>
              </div>
              <!-- <div class="col-1"></div> -->
              <div class="col-2 live-date dateFor">{{new Date(live.date_start).toDateString()}}</div>
            </div>
            <div
              class="row upcoming-row m-5 border-bottom"
              v-for="upcoming in upcomings"
              v-bind:key="upcoming"
            >
              <div class="col-3">
                <div class="upcoming">
                  <h2>
                    <span>Upcoming</span>
                    {{upcoming.subtitle}}
                  </h2>
                  <p class="liveup">
                    {{upcoming.venue.name}}
                    <br />
                    {{upcoming.venue.location}}
                    <br />
                    {{new Date(upcoming.date_start).toLocaleTimeString()}}
                  </p>
                </div>
              </div>
              <div class="col-2 team-name">
                <h4 class="h-title">{{upcoming.teama.name}}</h4>
              </div>
              <div class="col-1">
                <img id="itemimage" :src="upcoming.teama.logo_url" />
              </div>
              <div class="col-1 upcoming-h1">VS</div>
              <div class="col-1">
                <img id="itemimage" :src="upcoming.teamb.logo_url" />
              </div>
              <div class="col-2 team-name">
                <h4 class="h-title">{{upcoming.teamb.name}}</h4>
              </div>
              <div
                class="col-2 upcoming-date dateFor"
              >{{new Date(upcoming.date_start).toDateString()}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upcomings: [],
      lives: []
    };
  },
  mounted() {
    this.axios
      .get(
        "https://rest.entitysport.com/v2/matches?status=1&per_page=100&paged=1&token=437214169d9be2a73e91d22f76f68b52"
      )
      .then(response => {
        this.upcomings = response.data.response.items;
      });
    this.axios
      .get(
        "https://rest.entitysport.com/v2/matches?status=3&per_page=100&paged=1&token=437214169d9be2a73e91d22f76f68b52"
      )
      .then(response => {
        this.lives = response.data.response.items;
      });
  },
  methods: {}
};
</script>

<style>
.h-screen {
  height: 100vh;
}
#itemimage {
  height: 40px;
  width: 60px;
}
.upcoming span:before {
  content: "";
  position: absolute;
  left: -10px;
  top: -8px;
  width: 50px;
  height: 50px;
  background: #006442;
  border-radius: 50%;
  z-index: -1;
}
.upcoming span {
  background-color: #006442;
  font-weight: 700;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
}
.upcoming h2 {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
}
.upcoming .liveup {
  margin-left: 20%;
}
.liveup {
  margin-left: 10%;
  margin-top: 15px;
}
.upcoming-row {
  cursor: default;
}
/*------------------- start live ----------------------- */

.live span {
  background-color: #f47320;
  font-weight: 700;
  color: #fff;
  padding: 8px;
  border-radius: 8px;
  position: relative;
  z-index: 0;
}
.live span:before {
  content: "";
  position: absolute;
  left: -14px;
  top: -5px;
  width: 40px;
  height: 40px;
  background: #f47320;
  border-radius: 50%;
  z-index: -1;
}
.live h2 {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
}
.live-date {
  font-weight: 700;
  font-size: 15px;
  color: #f47320;
}
.live > p {
  color: #f47320 !important;
}
h5.score {
  font-weight: 600;
}
.col-1.live-h1 {
  font-weight: bold;
  font-size: 29px;
  color: #f47320;
}
/*------------------- end live ----------------------- */

body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Barlow Semi Condensed, sans-serif;
}
body {
  background-color: #f2f1f1;
  color: #000;
  font-size: 16px;
  font-weight: 400;
}
/* .upcoming {
  color: #006442;
} */
.upcoming {
  display: table-cell;
  vertical-align: inherit;
}

.upcoming .liveup {
  margin-left: 20%;
}
.liveup {
  margin-left: 10%;
  margin-top: 15px;
}
.h-title {
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
}
.upcoming-date {
  font-weight: 700;
  font-size: 15px;
  color: #006442;
}
p {
  margin: 0;
  line-height: 1;
}
.liveup {
  margin-left: 10%;
  margin-top: 15px;
}
.upcoming .liveup {
  margin-left: 20%;
}
.upcoming-h1 {
  color: #006442;
  font-weight: 700;
}
h1 {
  font-size: 30px;
  margin: 0;
}
.upcoming-row h4 {
  margin: 0;
}
.h-title {
  font-weight: 700;
  text-transform: uppercase;
}

.nav-tabs li a.active {
  z-index: 2;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #fff;
  padding: 13px 30px;
  color: #4c4c4e;
  border: 1px solid;
  border-color: #ddd #ddd transparent;
}
.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}
.nav-tabs li a,
.nav-tabs li a:hover {
  color: #fff;
  background-color: #006442;
}
.nav-tabs li a {
  z-index: 1;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px 20px;
  transition: all 0.5s;
}
.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}

.nav > li > a {
  padding: 10px 15px;
}
.nav > li,
.nav > li > a {
  position: relative;
  display: block;
}
.result a {
  border-top-left-radius: 15px !important;
  border-top-right-radius: 15px !important;
  margin-left: -10px;
  color: white !important;
}
.nav > nav-tabs > ul {
  margin-left: 90px;
}
.card {
  border-radius: 30px !important;
}
ul.nav.nav-tabs {
  margin-left: 43px !important;
}
.upcoming > p {
  color: #006442 !important;
}
.col-1.upcoming-h1 {
  font-weight: bold;
  font-size: 29px;
}
</style>
