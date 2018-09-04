		Vue.component('gwc-component',{
			props:['item'],
			template:"<div>\
						<div v-if='item.vf' style='margin-bottom:20px;margin-top:40px;'>\
						<div class='row map-lg1' style='font-size:14px;'>\
						<div class='col-12 d-none d-lg-block text-left'>\
						<input type='checkbox' @click='spcheckall' :checked='spckall' style='vertical-align: middle' :class='item.dm'>\
						{{item.dm}}\
						</div>\
						</div>\
						<div class='container' style='font-size:14px;' v-for='(items,index) in item.sp' v-if='items.vf' :items='items' :index='index'>\
						<div class='row'>\
						<div class='col-12 d-none d-lg-block'>\
						<div class='row gwc-main map-lg2'>\
						<div class='col-2 d-none d-lg-block'>\
						<input type='checkbox' :checked='spids.indexOf(items.info) > -1' @click='checkone(items.info)' style='vertical-align: top'>\
						<img :src='items.tp' id='gwc-lg-img'>\
						</div>\
						<div class='col-2 d-none d-lg-block text-left align-self-center'>\
						<a href='###'>{{items.info}}</a>\
						</div>\
						<div class='col-1 d-none d-lg-block offset-3 text-center align-self-center'>\
						￥{{items.price}}\
						</div>\
						<gwc-component2 :items='items' @incg='inchange' :spids='spids' ref='two' @kong='kong' @cgkk='cgkong' @co='checkone'></gwc-component2>\
						<div class='col-1 d-none d-lg-block align-self-center'>\
						￥{{(items.num*items.price)}}\
						</div>\
						<div class='col-1  d-none d-lg-block align-self-center'>\
						<div class='row'>\
						<div class='col-12 text-left'>\
						<a href='###'>收藏</a></div>\
						<div class='col-12 text-left'>\
						<deleteone :items='items' @co='checkone' @kong='kong' :spids='spids'></deleteone>\
						</div>\
						<div class='col-12'>\
						<a href='###'>类似商品</a>\
						</div></div></div></div></div></div>\
						</div></div>\
						\
						<div v-if='item.vf' style='margin-bottom:10px;margin-top:-20px;'>\
						<div class='row map-md1' style='font-size:13px;'>\
						<div class='col-12 d-none d-md-block d-lg-none text-left'>\
						<input type='checkbox' @click='spcheckall' :checked='spckall' style='vertical-align: middle' :class='item.dm'>\
						{{item.dm}}\
						</div>\
						</div>\
						<div class='container' style='font-size:12px;' v-for='(items,index) in item.sp' v-if='items.vf' :items='items' :index='index'>\
						<div class='row'>\
						<div class='col-12 d-none d-md-block d-lg-none'>\
						<div class='row gwc-main map-md2'>\
						<div class='col-2 d-none d-md-block d-lg-none'>\
						<input type='checkbox' :checked='spids.indexOf(items.info) > -1' @click='checkone(items.info)' style='vertical-align: top'>\
						<img :src='items.tp' id='gwc-md-img'>\
						</div>\
						<div class='col-3 d-none d-md-block d-lg-none text-left align-self-center'>\
						<a href='###'>{{items.info}}</a>\
						</div>\
						<div class='col-1 d-none d-md-block d-lg-none offset-1 text-center align-self-center'>\
						￥{{items.price}}\
						</div>\
						<gwc-component2 :items='items' @incg='inchange' :spids='spids' ref='two' @kong='kong' @cgkk='cgkong' @co='checkone'></gwc-component2>\
						<div class='col-1 d-none d-md-block d-lg-none align-self-center' style='padding-left: 15px;'>\
						￥{{(items.num*items.price)}}\
						</div>\
						<div class='col-2 d-none d-md-block d-lg-none align-self-center' style='padding-left: 40px;'>\
						<div class='row'>\
						<div class='col-12 text-left'>\
						<a href='###'>收藏</a></div>\
						<div class='col-12 text-left'>\
						<deleteone :items='items' @co='checkone' @kong='kong' :spids='spids'></deleteone>\
						</div>\
						<div class='col-12'>\
						<a href='###'>类似商品</a>\
						</div></div></div></div></div></div>\
						</div></div>\
						\
						<div v-if='item.vf' style='margin-bottom:10px;margin-top:-20px;'>\
						<div class='row map-md1' style='font-size:13px;'>\
						<div class='col-12 d-block d-md-none text-left'>\
						<input type='checkbox' @click='spcheckall' :checked='spckall' style='vertical-align: middle' :class='item.dm'>\
						{{item.dm}}\
						</div>\
						</div>\
						<div class='container' style='font-size:12px;' v-for='(items,index) in item.sp' v-if='items.vf' :items='items' :index='index'>\
						<div class='row'>\
						<div class='col-12 d-block d-md-none'>\
						<div class='row gwc-main map-md2'>\
						<div class='col-12 d-block d-md-none'>\
						<div class='row'>\
						<div class='col-5 d-block d-md-none' style='margin-top: 3px;'>\
						<input type='checkbox' :checked='spids.indexOf(items.info) > -1' @click='checkone(items.info)' style='vertical-align: top'>\
						<img :src='items.tp' id='gwc-xs-img'>\
						</div>\
						<div class='col-7 d-block d-md-none text-left' style='margin-left: -25px;'>\
						<a href='###'>{{items.info}}</a>\
						</div>\
						</div>\
						</div>\
						<div class='col-5 d-block d-md-none text-left' style='font-size:13px;'>\
						单价:&nbsp;￥{{items.price}}\
						</div>\
						<div class='col-5 d-block d-md-none' style='font-size:13px;'>\
						金额:&nbsp;￥{{(items.num*items.price)}}\
						</div>\
						<gwc-component2 :items='items' @incg='inchange' :spids='spids' ref='two' @kong='kong' @cgkk='cgkong' @co='checkone'></gwc-component2>\
						<div class='col-12 d-block d-md-none'>\
						<div class='row'>\
						<div class='col-4 text-left d-block d-md-none'>\
						<a href='###'>收藏</a></div>\
						<div class='col-4 d-block d-md-none text-center'>\
						<a href='###'>类似商品</a>\
						</div>\
						<div class='col-4 text-right d-block d-md-none'>\
						<deleteone :items='items' @co='checkone' @kong='kong' :spids='spids'></deleteone>\
						</div>\
						</div></div></div></div></div>\
						</div></div>\
						</div>",
			data(){
			return {
				spckall:false,
				spisallcheck: false,
				spids:[],
				ids:[],
				nsum:0,
				psum:0,
				deleteall:true,
				kk:true,
				}
			},
			methods:{
				vfk(){
				this.$emit('gkk',this.item.vf);
				},
				cgkong(){
				this.kk=false;
				},
				kong(){
				for(f=0;f<=this.item.sp.length;f++){
					this.$refs.two[f].kongg();
					if(this.kk){
					this.item.vf=false;	
					}
					else{
					this.kk=true;
					this.item.vf=true;	
					break;
					}
					}
				this.$emit('gwcko',1);
				},
				deleteaone(){
					for(e=0;e<=this.item.sp.length;e++){
					this.$refs.two[e].onevf();
					}
					this.$emit('gwcko',1);
				},
				deleteaa(){
					this.item.vf=this.deleteall;
					this.$emit('gwcko',1);
				},
				sum(){
					this.nsum=0;
					this.item.sp.forEach(function (items) {
					if(this.spids.indexOf(items.info)>=0&&items.vf==true){
					this.nsum=this.nsum+parseInt(items.num);}
					},this);
					this.$emit('ns',this.nsum);
				},
				pricesum(){
					this.psum=parseFloat(0);
					this.item.sp.forEach(function (items) {
					if(this.spids.indexOf(items.info)>=0&&items.vf==true){
					this.psum=parseFloat(this.psum)+parseFloat(items.num*parseFloat(items.price));}
					},this);
					this.$emit('ps',this.psum);
				},
				checkall(){
					this.spckall=true;
					this.spids = [];
					this.item.sp.forEach(function (items) {
					this.spids.push(items.info)
					},this);
					this.$emit('cg',0);
				},
				uncheckall(){
					this.spids = [];
					this.spckall=false;
				},
				inchange(info){
					let idindex=this.spids.indexOf(info);
					if(idindex>=0){
					}else{
					this.spids.push(info);
					if(this.item.sp.length==this.spids.length){
						this.ids.push(this.item.dm);
						this.spckall=true;
						this.$emit('aallck',1);
						this.spisallcheck=true;					
					}
					}
					this.$emit('cg',0);
				},
				checkone(id){
					let idindex=this.spids.indexOf(id);
					if(idindex>=0){
					this.spids.splice(idindex, 1);
					}else{
					this.spids.push(id);
					}
					if(this.spckall==false){
					var i=0;
					this.item.sp.forEach(function (items) {
					if(items.vf==true){
					i++;
					}
					},this);
						if(i==this.spids.length){
						this.ids.push(this.item.dm);
						this.spckall=true;
						this.$emit('aallck',1);
						this.spisallcheck=true;
					}else{
						this.ids.splice(this.ids.indexOf(this.item.dm),1);
						this.spckall=false;
						this.$emit('aallck',0);
						this.spisallcheck=false;
					}
					}else{
						this.ids.splice(this.ids.indexOf(this.item.dm),1);
						this.spckall=false;
						this.$emit('aallck',-1);
						this.spisallcheck=false;
					}
					this.$emit('cg',0);
					},
				spcheckall(){
					this.spisallcheck=!this.spisallcheck;
					if (this.spisallcheck) {
					this.spids = [];
					this.item.sp.forEach(function (items) {
					this.spids.push(items.info)
					},this);
					this.ids.push(this.item.dm);
					this.spckall=true;
					this.$emit('aallck',1);
					} else {
					this.spids = [];
					this.ids.splice(this.ids.indexOf(this.item.dm),1);
					this.spckall=false;
					this.$emit('aallck',-1);
					}
					this.$emit('cg',0);
				},
			},
		 })
		Vue.component('deleteone',{
		props:['items','spids'],
		template:"<div><a href='#' @click='deleteone' style='color:blue'>删除</a></div>",
		methods:{
			deleteone(){
				if(this.spids.indexOf(this.items.info)>=0){
					this.items.vf=false;
					this.$emit('co',this.items.info);
					this.$emit('kong',this.items.info);
					}else{
					this.items.vf=false;
					this.$emit('kong',this.items.info);
					}
				},
		}
		})
		Vue.component('gwc-component2',{
			props:['items','spids'],
			template:"<div class='col-12 col-md-2 d-flex align-self-center'>\
						<div class='row' >\
						<div class='col-7 offset-3 d-none d-lg-block' style='padding-left: 7px;'>\
						<div class='gw-num'>\
						<div class='jian gwc-unselect' @click='jian'><b>-</b></div>\
						<input @input='submitg' @change='inchange' @blur='blur1' v-model.number:value='items.num' class='num'/>\
						<div class='add gwc-unselect' @click='add'><b>+</b></div></div></div>\
						\
						<div class='col-7 offset-3 d-none d-md-block d-lg-none' style='padding-left: 12px;'>\
						<div class='gw-nummd'>\
						<div class='jianmd gwc-unselect' @click='jian'><b>-</b></div>\
						<input @input='submitg' @change='inchange' @blur='blur1' v-model.number:value='items.num' class='nummd'/>\
						<div class='addmd gwc-unselect' @click='add'><b>+</b></div></div></div>\
						\
						<div class='col-12 d-block d-md-none'>\
						<div class='gw-num'>\
						<div class='jian gwc-unselect' @click='jian'><b>-</b></div>\
						<input style='font-size:20px;' @input='submitg' @change='inchange' @blur='blur1' v-model.number:value='items.num' class='num'/>\
						<div class='add gwc-unselect' @click='add'><b>+</b></div></div></div>\
						</div></div>",
			data(){
				return{
				
				}
			},
			methods:{
					kongg(){
					if(this.items.vf){
					this.$emit('cgkk',this.items.info);
					}
					},
					onevf(){
					if(this.spids.indexOf(this.items.info)>=0){
					this.items.vf=false;
					this.$emit('co',this.items.info);
					this.$emit('kong',this.items.info);
					}
					},
					add(){
					this.items.num=parseInt(this.items.num)+1;
					this.$emit('incg',this.items.info);
					},
					jian(){
					if (this.items.num>1){
					this.items.num=this.items.num-1;
					this.$emit('incg',this.items.info);	
					}
					},
					blur1(){
					if(this.items.num==''){
						this.items.num=1;
					}
					this.$emit('incg',this.items.info);
					},
					submitg(){
					this.items.num=this.items.num.replace(/^[0]+[0-9]*$/gi,"");
					this.items.num=this.items.num.replace(/[^\d]/g,'');
					},
					inchange(){
					this.$emit('incg',this.items.info);
					}
				},
		})
	let app = new Vue({
			el:'#root',
			data:{
				gk:true,
				idslen:0,
				sum:0,
				ckall:false,
				isallcheck:false,
				gwcgg1:'gwc-mo',
				gwcgg2:'',
				gwcgg3:'',
				ggxs1:true,
				ggxs2:false,
				ggxs3:false,
				gwck:false,
				img1:'../img/u2018.jpg',
				img2:'../img/u2020.jpg',
				img3:'../img/u2022.jpg',
				submithref:'',
				gwcList:[],
				spsum:0,
				pricesum:(0).toFixed(2),
			},
			methods:{
			setlist: function(){
			qwest.setDefaultOptions({ cache: true });
			qwest.get(
			"https://fdk.coding.me/cklm/gwcjson.json"  
			).then(
			function(xhr, msg) {
			console.log(msg.gwcList);
			if (msg && msg.gwcList) {
			app.gwcList=msg.gwcList;
			}
			}
			); 
			},
			gwcggmo1(){
				this.gwcgg1='gwc-mo';
				this.gwcgg2='';
				this.gwcgg3='';
				this.ggxs1=true;
				this.ggxs2=false;
				this.ggxs3=false;
			},
			gwcggmo2(){
				this.gwcgg2='gwc-mo';
				this.gwcgg1='';
				this.gwcgg3='';
				this.ggxs2=true;
				this.ggxs1=false;
				this.ggxs3=false;

			},
			gwcggmo3(){
				this.gwcgg3='gwc-mo';
				this.gwcgg2='';
				this.gwcgg1='';
				this.ggxs3=true;
				this.ggxs2=false;
				this.ggxs1=false;
			},
			checkall(){
				this.ckall=!this.ckall;
				if(this.ckall==true){
				for(b=0;b<this.gwcList.length;b++){
				this.$refs.one[b].checkall();
				this.$refs.one[b].spisallcheck=true;	
				}
				this.idslen=this.gwcList.length;
				}else{
				for(c=0;c<this.gwcList.length;c++){
				this.$refs.one[c].uncheckall();
				this.$refs.one[c].spisallcheck=false;	
				}
				this.idslen=0;
				this.spsum=0;
				this.pricesum=(0).toFixed(2);
				}	
			},
			allck(ids){
				this.idslen=this.idslen+ids;
				if(this.idslen==this.gwcList.length){
					this.ckall=true;
					this.isallcheck=true;
				}else{
					this.ckall=false;
					this.isallcheck=false;
				}
			},
			nums(q){
				this.spsum=0;
				for(i=0;i<this.gwcList.length;i++){
				this.spsum=this.spsum+this.$refs.one[i].nsum;
				}
			},
			prices(w){
				this.pricesum=parseFloat(0);
				for(a=0;a<this.gwcList.length;a++){
				this.pricesum=parseFloat(this.pricesum)+parseFloat(this.$refs.one[a].psum);
				this.pricesum=parseFloat(this.pricesum).toFixed(2);
	
				}
			},
			changes(s){
			for(m=0;m<this.gwcList.length;m++){
				this.$refs.one[m].sum();
				this.$refs.one[m].pricesum();
				}
			},
			deletea(){
			for(d=0;d<this.gwcList.length;d++){
				this.$refs.one[d].vfk();
				if(this.gk){
				if(this.$refs.one[d].spckall==true){
				this.$refs.one[d].deleteall=false;
				this.$refs.one[d].deleteaa();
				this.$refs.one[d].spcheckall();
				}else{
				this.$refs.one[d].deleteaone();
				}	
				}
				}
				},
			gkm(f){
				this.gk=f;
			},
			gwckong(n){
				for(z=0;z<this.gwcList.length;z++){
				this.$refs.one[z].vfk();
				if(this.gk==true){
				this.gwck=false;
				break;
				}else{
				this.gwck=true;
				}
				}
			},
			},
			})
	$(document).ready(function(){
	app.setlist();
	});