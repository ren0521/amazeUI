const express = require('express');
const router = express.Router();
const trees = [
    {title:'0121',name:'银杏',age:350,address:'浦江镇闸港1号（沙门庙）永浦路闸港1号'},
    {title:'0168',name:'银杏',age:300,address:'浦江镇杜行小学长寿禅寺'},
    {title:'0170',name:'银杏',age:300,address:'浦江镇建新村四组'},
    {title:'0275',name:'银杏',age:200,address:'浦江镇陈行街杜行幼儿园（石林庵西株）'},
    {title:'0276',name:'银杏',age:200,address:'浦江镇陈行街杜行幼儿园（石林庵中株）'},
    {title:'0277',name:'银杏',age:200,address:'浦江镇陈行街杜行幼儿园（石林庵东株）'},
    {title:'0445',name:'银杏',age:100,address:'浦江镇建新村十组（东株）'},
    {title:'0446',name:'银杏',age:100,address:'浦江镇建新村十组（西株）'},
    {title:'0503',name:'银杏',age:100,address:'浦江镇建东村（关帝庙）鲁陈路1388号'},
    {title:'1515',name:'银杏',age:100,address:'浦江镇张行村斯米克厂'},
    {title:'1516',name:'银杏',age:100,address:'浦江镇建中九队29号'},
    {title:'1519',name:'朴树',age:100,address:'浦江镇万里小学'},
    {title:'1520',name:'罗汉松',age:100,address:'浦江镇淡家港叶家桥路200号（上海师范大学附属中学）'},
    {title:'1524',name:'柘树',age:0,address:'浦江镇永建村9组19号前'}
]
const worms = [
    {title:'美国白蛾',name:'drury',text:'学名: Hyphantria cunea（Drury），又名美国灯蛾、秋幕毛虫、秋幕蛾，属鳞翅目灯蛾科，是世界性检疫害虫。 主要危害果树行道树观赏树木，尤以阔叶树危害严重，对农作物林木果树等造成了严重的危害，目前已被列入我国首批外来入侵物种。'},
    {title:'小蜻蜓尺蛾',name:'cystidia',text:'学名: Cystidia couaggaria (Guenée,1857)，尺蛾科的一个物种。前翅长雄22--23mm，雌22mm。触角线形。'}
]
var num = 0;


router.get('/',function(req,res){
    res.render('index.html',)
    console.log(++num)
})

router.get('/trees',function(req,res){
    res.render('trees.html',{
        trees:trees
    })
    console.log(++num)
})

router.get('/tree',function (req,res) {
    res.render('tree.html',{
        tree:trees.find(function (item) {
            return item.name === req.query.name
        })
    })
})

router.get('/wormList',function(req,res){
    res.render('wormList.html',{worms:worms})
    console.log(++num)
})

router.get('/worm',function (req, res) {
    res.render('worm.html',{
            worm:worms.find(function (item) {
            return item.name === req.query.name
        })
    })
})

router.post('/form',function (req,res) {
    var person =  req.body
    res.redirect(301, '/');
})
module.exports = router
