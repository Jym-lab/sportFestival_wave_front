const TimeTableCircle = ({ content, color }) => {
    return (
        <div className="TimeTableCircle flex mb-1">
            <p className={`timetableCirclesmall timetableCircle_${color} mr-1`}></p>
            <p>{content}</p>
        </div>
    )
}

export default TimeTableCircle;