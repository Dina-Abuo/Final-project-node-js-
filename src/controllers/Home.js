const db = require('../models')
module.exports = {
    index: async (req, res) => {
        // let lastEvent = await db.sequelize
        //     .query( `select * from events where date >= now()`, { plain: true } );
        let [eventsSchedule] = await db.sequelize
            .query(`SELECT e.*, concat(s.firstName,' ', s.lastName) as speakerName, s.job as speakerJob, t.name as topicName 
            FROM events e join speakers s on s.id = e.speakerId
                          join topics t on e.topicId = t.id where date >= now() order by date limit 0, 5` );

        let [speakers] = await db.sequelize.query(`select concat(s.firstName,' ', s.lastName)as name , s.job, s.twitter, s.facebook, s.linkedin from speakers s `);
        res.render('home', { eventsSchedule, speakers })
    },
    events: async (req, res) => {
        let [events] = await db.sequelize
            .query(`SELECT e.*, concat(s.firstName,' ', s.lastName) as speakerName, t.name as topicName 
            FROM events e join speakers s on s.id = e.speakerId
                          join topics t on e.topicId = t.id where date >= now() limit 0, 5` );

        res.render('homeEvents', { events })
    },
    speakers: async (req, res) => {
        let [speakers] = await db.sequelize
            .query(` SELECT job  ,concat(s.firstName,' ', s.lastName) as name from speakers s `);
        res.render('homeSpeakers', { speakers })
    },
    page: async (req, res) => {
        const event = await db.events.findByPk(req.params.id);
        res.render('singlPageEvents', { event })
    }

}