const DatabaseUtils = {
    async createRSVP(data) {
        try {
            return await trickleCreateObject('rsvp', data);
        } catch (error) {
            console.error('Error creating RSVP:', error);
            throw error;
        }
    },

    async createWish(data) {
        try {
            return await trickleCreateObject('wishes', data);
        } catch (error) {
            console.error('Error creating wish:', error);
            throw error;
        }
    },

    async getWishes(limit = 10) {
        try {
            const result = await trickleListObjects('wishes', limit, true);
            return result.items;
        } catch (error) {
            console.error('Error getting wishes:', error);
            return [];
        }
    },

    async getRSVPs(limit = 50) {
        try {
            const result = await trickleListObjects('rsvp', limit, true);
            return result.items;
        } catch (error) {
            console.error('Error getting RSVPs:', error);
            return [];
        }
    },

    async getStatistics() {
        try {
            const rsvps = await this.getRSVPs();
            const attending = rsvps.filter(r => r.objectData.attendance === 'hadir');
            const notAttending = rsvps.filter(r => r.objectData.attendance === 'tidak-hadir');
            const totalGuests = attending.reduce((sum, r) => sum + (r.objectData.guests || 1), 0);

            return {
                totalRSVPs: rsvps.length,
                attending: attending.length,
                notAttending: notAttending.length,
                totalGuests
            };
        } catch (error) {
            console.error('Error getting statistics:', error);
            return { totalRSVPs: 0, attending: 0, notAttending: 0, totalGuests: 0 };
        }
    }
};
