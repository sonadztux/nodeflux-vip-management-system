import { VIP } from '../models/vip'

export const initializeDummyData = async () => {
  try {
    await VIP.create({
      name: 'Taufik Hidayat',
      country_of_origin: 'Indonesia',
      eta: new Date(),
      photo:
        'https://staticg.sportskeeda.com/wp-content/uploads/2012/02/taufik-hidayat.jpg',
      attributes: ['red jacket indonesian team', 'blue jeans'],
    })
    await VIP.create({
      name: 'sonadztux',
      country_of_origin: 'Zimbabwe',
      eta: new Date(Date.now() - 1000 * 60 * 30), // minus 30 minutes
      photo: 'https://pbs.twimg.com/profile_images/1295117706673270784/iA48jbY9_400x400.jpg',
      attributes: ['blackpink jacket zimbabwe team', 'blackpink jeans'],
    })
    await VIP.create({
      name: 'Alexander Deden',
      country_of_origin: 'Javanese-Netherlands',
      eta: new Date(Date.now() - 1000 * 60 * 60), // minus 60 minutes

      attributes: ['black jacket amsterdam team', 'red dutch headband'],
    })
    console.log('Initialize dummy data succeeded')
  } catch (err) {
    console.log('Failed to initialize dummy data, reason: ' + err)
  }
}
