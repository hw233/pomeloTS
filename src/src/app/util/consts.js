Object.defineProperty(exports, "__esModule", { value: true });
class Consts {
}
Consts.consts = {
    RES_CODE: {
        SUC_OK: 200,
        ERR_NO_LOGIN: 201,
        ERR_FAIL: 500,
        NO_SERVER_AVAILABLE: 404
    },
    RES_MSG: {
        ERR_FAIL: '服务器出错',
        ERR_HANDLE_TIMEOUT: '处理请求超时',
        ERR_ENTRY_SCENCE_FAIL: '主场景服务器出错',
        ERR_NO_SERVER_AVAILABLE: '没有可用的服务器',
        ERR_NO_DATABASE_AVAILABLE: '没有可用的数据服务器',
        ERR_NO_OAUTH_USER: '您的账号未登录或已过期',
        ERR_OTHER_USER: '账号在其它地方登录',
        ERR_VOID_PARAM: '无效的请求参数',
        ERR_AREA_GET: '读取游戏区列表失败',
        ERR_CHARACTER_NOT_EXIST: '选择的主角不存在',
        ERR_PLAYER_NO_EXIST: '玩家角色不存在',
        ERR_PLAYER_EXIST: '玩家角色已存在',
        ERR_PLAYER_NAME: '角色名称不合法，请重新输入',
        ERR_PLAYER_NAME_EXIST: '角色名已存在，更换其它名称',
        ERR_PLAYER_CREATE: '创建玩家角色失败',
        ERR_NO_FOUND_BOSS: 'BOSS关卡已到最后一关',
        ERR_BOSS_TIME: 'BOSS挑战时间未到',
        ERR_BOSS_COMBAT: 'BOSS挑战失败',
        ERR_EXTRACT_NOT_TIME: '挂机自动抽奖时间还未到',
        ERR_NO_ENERGY: '体力不足',
        ERR_SUMMON_TAKE: '式神召唤失败',
        ERR_SUMMON_NOT_MENOY: '无法抽奖，勾玉不足',
        ERR_SUMMON_NOT_GOLD: '无法抽奖，金币不足',
        ERR_SUMMON_NOT_TICKET: '无法抽奖，奖券不足',
        ERR_SUMMON_NOT_XP: '无法抽奖，XP不足',
        ERR_BUY_ENERGY: '补充体力失败',
        ERR_NOT_MENOY: '勾玉不足',
        ERR_NOT_FOUND_GOBLIN: '未找到百鬼配置',
        ERR_ENTRY_GOBLIN_FAIL: '进入百鬼界面出错',
        ERR_BUY_BEAN_IS_FULL: '仙豆已经到上限，不需要补充',
        ERR_BUY_BEAN_FAIL: '补充仙豆失败',
        ERR_NO_BEAN: '仙豆不足',
        ERR_ATTACK_GOBLIN_FAIL: '攻击百鬼失败',
        ERR_REFRESH_GOBLIN_FAIL: '刷新百鬼失败',
        ERR_EXT_MAX: '您的可扩充次数已满',
        ERR_HERO_LINEUP_DXDP: '式神阵位未开启',
        ERR_HERO_NOT_EXIST: '选择的式神不存在',
        ERR_NOT_FOUND_INTEN: '未找到配置信息',
        ERR_INTEN: '配置信息错误',
        ERR_NOT_GOLD: '金币不足',
        ERR_NOT_EXP: '经验不足',
        ERR_NOT_ITEM: '物品不足',
        ERR_NOT_HERO: '式神不足',
        ERR_NOT_FRAGMENT: '式神碎片不足',
        ERR_NOT_SMELT: '选择的式神无法熔炼',
        ERR_ITEM_NOT_USE: '该物品不能使用',
        ERR_ITEM_NOT_COMPOSE: '该物品不能合成',
        ERR_BAG_PROP_OVERFLOW: '道具背包空间不足',
        ERR_BAG_MAT_OVERFLOW: '材料背包空间不足',
        ERR_BAG_HERO_OVERFLOW: '式神背包空间不足',
        ERR_HERO_NOT_EXCHANGE: '该式神不能兑换',
        ERR_HERO_EXCHANGE: '该式神已被兑换,不能重复兑换',
        ERR_NOT_ADULT: '验证结果,未成年',
        ERR_VERIFIDE: '已经验证过,无需重复验证',
        ERR_NAME: '姓名输入有误',
        ERR_IDNUMBER: '身份证号码有误',
        ERR_POINT_MAX: '超过可选最大关卡',
        ERR_POINT_NOW: '无法选择当前关卡',
        ERR_BUY_ETE_CARD: '已经购买终身卡',
        ERR_NOT_BUY_CARD: '未购买特权卡',
        ERR_NOT_BUY_ETE_CARD: '未购买终身卡',
        ERR_MON_CARD_OUT_TIME: '月卡已过有效期',
        ERR_CARD_TODAY_AWARD: '今日奖励已领取过',
        ERR_TASK_NO_COMPLETE: '未完成任务',
        ERR_TASK_AWARD: '任务奖励已领取',
        ERR_RECHARGE_NO_COMPLETE: '未达到充值金额',
        ERR_AWARD: '奖励已被领取',
        ERR_TOWER_NO_SWEEP: '不能扫荡镇妖塔',
        ERR_TOWER_COMBAT: '镇妖塔挑战失败',
        ERR_TOWER_RESET_MAX: '今天不能再重置镇妖塔',
        ERR_TOWER_NO_FOUND: '已到镇妖塔最后一层',
        ERR_TOWER_NO_VIP: '您不是VIP,还不能进行扫荡',
        ERR_SWEEP_PROP_OVERFLOW: '道具背包空间不足,请清理后继续扫荡',
        ERR_SWEEP_MAT_OVERFLOW: '材料背包空间不足,请清理后继续扫荡',
        ERR_SWEEP_HERO_OVERFLOW: '式神背包空间不足,请清理后继续扫荡',
        ERR_NOT_LV: '请先提升等级',
        ERR_NOT_STARLV: '请先提升星级',
        ERR_LV_MAX: '达到最高等级',
        ERR_STARLV_MAX: '达到最高星级',
        ERR_GOBLIN_COMPLETE: '已挑战过',
        ERR_NOT_ILL_ACH: '图鉴成就未完成',
        ERR_AWARD_ILL_ACH: '图鉴成就奖励已经领取',
        ERR_HAVE_RECEIVED: '已经领取过',
        ERR_ONCE_RECHARGE: '还未一次充值25元，请赶快去充值',
        ERR_HEROPIECERAIN_MINPOINT: '还未达到挑战妖怪雨的关卡',
        ERR_HEROPIECERAIN_OVERINTERVAL: '时间间隔没到',
        ERR_HEROPIECERAIN_OVERFLOW: '拾取数量异常',
        ERR_BOSSCOMBAT_OVERFLOW: '一天只能扫荡一次',
        ERR_BOSSCOMBAT_LIMIT: '本层关卡还未通关，不能挑战BOSS',
        ERR_MAIL_NOMAIL: '没有邮件',
        ERR_MIAL_NOHASTHISMAIL: '不存在这个邮件',
        ERR_SIGN_DAYLIMIT: '累计天数不足，不能领累计签到领奖',
        ERR_NO_VIP: '您不是还不是vip，请充值',
        ERR_NOT_ALL_GET: '前面的要全部领取，才能领取第七天大奖，赶快去领吧。',
        ERR_RECHARGEREBATE_TIMEOUT: '时间过期，无法领取',
        ERR_NOT_LIFELIKE: '命格值不足',
        ERR_NOT_LIFELIKELEVEL: '该重命格还没有开通',
        ERR_NOTDONE_LASTLEVEL: '上一重还没全部炼制完',
        ERR_NOTDONE_LASTBALL: '上一坏还炼制',
        ERR_CARD_CD: '挑战令CD时间区间出错',
        ERR_ENTRY_RANKED_GAME_FAIL: '进入排位赛界面失败',
        ERR_CARD_NUM: '挑战令数量出错',
        ERR_CARD_NOT_ENOUGH: '挑战令不足',
        ERR_IN_CD: '下一次挑战CD未结束',
        ERR_CARD_LIMIT: '挑战令数量已达上限',
        ERR_WORLDBOSSCOMBAT_OVERFLOW: '挑战次数已经达到上限，请下周再来挑战',
        ERR_WORLDBOSSCOMBAT_TIMELIMIT: '今天不能挑战这个BOSS，请去挑战其它BOSS',
        ERR_WORLDBOSS_COMBAT: '世界BOSS挑战失败',
        ERR_WORLDBOSS_GETRANKINFO: '获取排行数据失败',
        ERR_POINTLOTTERY_TIMELIMIT: '抽奖次数已经用完，请耐心等待重置',
        ERR_POINTLOTTERY_UPDATELIMIT: '已经升级到最高级，无法再升级',
        ERR_POINTLOTTERY_UPDATEITEMSLIMIT: '升级材料不足',
        ERR_DATA_NOT_EXIST: '数据不存在',
        ERR_REMEDIAL_NOT_EXIST: '补领奖励数据不存在',
        ERR_ROULETTE_LIMIT: '您已经抽到最高档，不能再抽了。',
        ENEMY_ID_ERR: '挑战对手ID不合法',
    },
    DB: {
        driver: "dbDriver",
        Shared: {
            type: "mysql",
            name: "dbclient"
        },
        Config: {
            type: "mysql",
            name: "configclient"
        },
        Data: {
            type: "mongodb",
            name: "dataclient"
        },
        Log: {
            type: "mysql",
            name: "logclient"
        }
    },
    Keys: {
        EVERY_DAY_REFRESH_TIME: 'EVERY_DAY_REFRESH_TIME',
        ENERGY_INTERVAL: 'ENERGY_INTERVAL',
        ENERGY_MAX: 'ENERGY_MAX',
        ENERGY_PRICE: 'ENERGY_PRICE',
        COMBAT_POWER_1: 'COMBAT_POWER_1',
        COMBAT_POWER_2: 'COMBAT_POWER_2',
        COMBAT_POWER_3: 'COMBAT_POWER_3',
        COMBAT_POWER_4: 'COMBAT_POWER_4',
        COMBAT_POWER_5: 'COMBAT_POWER_5',
        COMBAT_POWER_6: 'COMBAT_POWER_6',
        COMBAT_POWER_7: 'COMBAT_POWER_7',
        COMBAT_POWER_8: 'COMBAT_POWER_8',
        COMBAT_POWER_9: 'COMBAT_POWER_9',
        COMBAT_MAX_ROUND: 'COMBAT_MAX_ROUND',
        COMBAT_HIT_RATE: 'COMBAT_HIT_RATE',
        COMBAT_POWER_INC: 'COMBAT_POWER_INC',
        COMBAT_POWER_DEC: 'COMBAT_POWER_DEC',
        BEAN_INTERVAL: "BEAN_INTERVAL",
        BEAN_MAX: "BEAN_MAX",
        BEAN_PRICE: "BEAN_PRICE",
        GOBLIN_COST_MONEY: "GOBLIN_COST_MONEY",
        HERO_BAG_INIT_NUM: "HERO_BAG_INIT_NUM",
        HERO_BAG_EXT_MAX: "HERO_BAG_EXT_MAX",
        HERO_BAG_EXT_PRICE: "HERO_BAG_EXT_PRICE",
        HERO_LINEUP_INIT_NUM: "HERO_LINEUP_INIT_NUM",
        HERO_LINEUP_EXT_PRICE: "HERO_LINEUP_EXT_PRICE",
        HERO_LINEUP_EXT_MAX: "HERO_LINEUP_EXT_MAX",
        BAG_EXT_MAX: "BAG_EXT_MAX",
        BAG_EXT_PRICE: "BAG_EXT_PRICE",
        SHOP_HERO_REFRESH_PRICE: "SHOP_HERO_REFRESH_PRICE",
        TOWER_RESET_PRICE: "TOWER_RESET_PRICE",
        TOWER_RESET_MAX: "TOWER_RESET_MAX",
        MAX_XP: "MAX_XP",
        OFFLINE_TIMES_PRICE: "OFFLINE_TIMES_PRICE",
        OFFLINE_DROP_HOUR: "OFFLINE_DROP_HOUR",
        OFFLINE_DROP_TIMES: "OFFLINE_DROP_TIMES",
        RANK_POWER_LIMIT: "RANK_POWER_LIMIT",
        RANK_HERONUM_LIMIT: "RANK_HERONUM_LIMIT",
        EXCHANGE_NEED_MONEY: "EXCHANGE_NEED_MONEY",
        EXCHANGE_AWARD_EXP: "EXCHANGE_AWARD_EXP",
        EXCHANGE_AWARD_GOLD: "EXCHANGE_AWARD_GOLD",
        HEROPIECERAIN_RESET_TIME: "HEROPIECERAIN_RESET_TIME",
        HEROPIECERAIN_POINT_MIN: "HEROPIECERAIN_POINT_MIN",
        BOSSCOMBAT_MONTH_NUM: "BOSSCOMBAT_MONTH_NUM",
        BOSSCOMBAT_FOREVER_NUM: "BOSSCOMBAT_FOREVER_NUM",
        MAIL_TIME: "MAIL_TIME",
        SIGN_PERIOD: "SIGN_PERIOD",
        ONLINE_NEED_MONEY: "ONLINE_NEED_MONEY",
        ROULETTE_LIMIT: "ROULETTE_LIMIT",
        CACHE_UPDATE_TIME: "CACHE_UPDATE_TIME",
        LIFELIKE_BALL_VALUE: "LIFELIKE_BALL_VALUE",
        EXCHANGE_AWARD_LIFELIKE: "EXCHANGE_AWARD_LIFELIKE",
        LIFELIKE_LEVEL_LIMIT: "LIFELIKE_LEVEL_LIMIT",
        WORLDBOSS_CHALLENGE_TIMES: "WORLDBOSS_CHALLENGE_TIMES",
    },
    Vars: {
        CHECK_POINT_MIN: 1001,
        SSR_INIT_NUM: 10,
        CHECKPOINT_EXTRACT_INTERVAL: 60,
        DAILY_TASK_RESET_HOUR: 6,
        DAILY_TASK_RESET_MIN: 30,
        DAILY_TASK_RESET_SEC: 30,
    },
    Enums: {
        UpgradeType: {
            HeroLv: 1,
            StarLv: 2,
            PropLv: 3,
            Evolve: 4
        },
        SummonType: {
            Money: 1,
            Gold: 2,
            Ticket: 3,
            GouYu: 4,
            XP: 5
        },
        SkillType: {
            Null: 0,
            DamageRate: 1,
            ReSelfHP: 2,
            ReSelfHPOfCurrent: 3,
            ReEnemyHP: 4,
            ReEnemyHPOfCurrent: 5,
            DamageEnemyHPOfCurrent: 6,
            IncAttack: 11,
            IncPH: 12,
            IncHit: 13,
            IncDodge: 14,
            IncSpeed: 15
        },
        ItemLogicType: {
            None: 0,
            Compose: 1,
            Item: 2,
            Hero: 3,
            DrawHero: 4,
            DrawItem: 5,
        },
        ItemType: {
            Prop: 0,
            Mat: 1
        },
        ItemClass: {
            Gold: 1,
            Exp: 2,
            Money: 3
        },
        ItemClassId: {
            Gold: 100000,
            Exp: 200000,
            Money: 300000
        },
        HeroType: {
            Main: 90001,
            Common: 10001
        },
        TaskType: {
            Checkpoint: 1,
            HeroLineup: 2,
            LineupLv: 3,
            SkillLv: 4,
            PropLv: 5,
            Power: 6,
            Goblin: 7,
            Tower: 8,
            HeroPieceRain: 9,
        },
        illAchStatus: {
            Not: 10,
            Can: 20,
            Alr: 30,
        },
        getStatus: {
            Not: 10,
            Can: 20,
            Alr: 30,
            Rem: 40
        },
        dayType: {
            FirstDay: 1,
            SevenDay: 2,
        },
        SevenDayLastDay: 7,
        dailyTaskType: {
            DailyGoblin: 1,
            DailyTower: 2,
            DailyCombat: 3,
            DailyExtractGold: 4,
            DailyExtractMoney: 5,
            DailyPieceRain: 6,
            DailyOnline: 7,
        },
        achieveTaskType: {
            AchieveLv: 101,
            AchieveStarLv: 102,
            AchieveSkillLv: 103,
            AchieveLinupNum: 104,
            AchievePointNum: 105,
        },
        dailyTaskAwardStatus: {
            Not: 0,
            Can: 1,
            Alr: 2,
        },
        remedialType: {
            Free: 0,
            Pay: 1,
        },
        achieveTaskAwardStatus: {
            Not: 0,
            Can: 1,
            Alr: 2,
        },
        DailyMinInc: 1,
        materialHero: 10009,
        redPointType: {
            Mail: 1,
            IllAch: 2,
            Sign: 3,
        },
        rebateType: {
            Today: 1,
            TodayFirst: 2,
            TodayTotal: 3,
            AllTotal: 4,
            AllEvery: 5,
            AllHigtTimes: 6,
            AllFirstLottery: 7
        },
        rechargeType: {
            Today: 1,
            All: 2
        },
        LifeLikeIncType: {
            Attack: 1,
            Hp: 2,
            Hit: 3,
            Dodge: 4,
            Speed: 5
        },
        RankedCard: 5,
        RankedPrice: 100,
        RankedCardCD: 1800,
        RankedFightCD: 300,
        RankedRedisUpdate: 3600,
        RankedRedisPlayerPrefix: "ranking:",
        RankedMatchArea: {
            Area1: 0,
            Area2: 1,
            Area3: 2,
            Area4: 3,
            Area5: 5,
            Area6: 10,
            Area7: 20,
            Area8: 30,
            Area9: 50,
            Area10: 100,
            Area11: 500,
            Area12: 1000,
            Area13: 2000,
        },
        consumeType: {
            buyItem: 0,
            reHeroShop: 1,
            heroTake: 2,
            buyenergy: 3,
            exchangexp: 4,
            exchangglod: 5,
            exchanghero: 6,
            moneyroulette: 7,
        },
        consumeMoneyType: {
            money: 0,
            givMoney: 1,
            gold: 2
        }
    }
};
exports.default = Consts;