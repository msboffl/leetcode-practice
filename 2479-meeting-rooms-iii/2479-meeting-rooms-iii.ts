function mostBooked(n: number, meetings: number[][]): number {
    meetings.sort((a, b) => a[0] - b[0]);

    const free: number[] = Array.from({ length: n }, (_, i) => i);
    const busy: [number, number][] = []; // [endTime, room]
    const count = Array(n).fill(0);

    const pushFree = (room: number) => {
        let i = 0;
        while (i < free.length && free[i] < room) i++;
        free.splice(i, 0, room);
    };

    for (const [start, end] of meetings) {
        while (busy.length && busy[0][0] <= start) {
            const [_, room] = busy.shift()!;
            pushFree(room);
        }

        let room: number, newEnd: number;
        if (free.length > 0) {
            room = free.shift()!;
            newEnd = end;
        } else {
            const [e, r] = busy.shift()!;
            room = r;
            newEnd = e + (end - start);
        }

        let i = 0;
        while (i < busy.length && (busy[i][0] < newEnd || (busy[i][0] === newEnd && busy[i][1] < room))) i++;
        busy.splice(i, 0, [newEnd, room]);
        count[room]++;
    }

    return count.indexOf(Math.max(...count));
}