import {studyGroups as initialGroups} from "../../data/studyGroups.js";
import React, { useState } from "react";

export default function StudyGroupCreate() {
    const [groups, setGroups] = useState(initialGroups)

    const [formData, setFormData] = useState({
        course: "",
        pace: "",
        noiseLevel: "",
        groupSize: null,
        meetingType: "",
        availability: "",
        vibe: "",
        method: "",
        description: "",
        creator: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newGroup = {
          id: groups.length + 1,
          ...formData
        };

        setGroups([...groups, newGroup]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-96 h-[1322px] relative bg-[radial-gradient(ellipse_46.26%_50.91%_at_50.00%_51.77%,_#FFB000_0%,_#FFB000_22%,_#FFB000_42%,_#FFDC90_81%,_#FFECC1_100%)] overflow-hidden">
            <div className="w-48 h-16 left-[17px] top-[60px] absolute justify-start text-black text-5xl font-normal font-['Marcellus_SC']">HUDDLE</div>
            <div className="w-96 h-[874px] left-[424px] top-[7px] absolute bg-Cal-Blue overflow-hidden">
                <div className="w-96 h-28 left-[41px] top-[186px] absolute justify-start text-black text-8xl font-normal font-['Inter']">HUDDLE</div>
                <div className="w-80 h-24 left-[55px] top-[336px] absolute bg-Cal-Gold" />
                <div className="w-80 h-24 left-[55px] top-[336px] absolute bg-Cal-Gold" />
                <div className="w-80 h-24 left-[56px] top-[448px] absolute bg-Cal-Gold" />
                <div className="w-52 h-16 left-[124px] top-[354px] absolute justify-start text-black text-5xl font-normal font-['Inter']">Sign in</div>
                <div className="w-52 left-[121px] top-[469px] absolute justify-start text-black text-5xl font-normal font-['Inter']">Sign up</div>
            </div>
            <img className="w-18 h-18 left-[290px] top-[60px] absolute rounded-[511px]" src="https://placehold.co/55x55" />
            <div className="w-4 h-4 left-[330px] top-[419px] absolute opacity-50" />
            <div className="w-80 h-[1100px] left-[35px] top-[184px] absolute bg-white rounded-2xl">
                <div className="w-72 h-8 px-3 pt-1.5 left-[24px] top-[20px] absolute bg-blue-400/40 rounded-[10px] inline-flex flex-col justify-start items-start">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Create Study Group</div>
                    </div>
                </div>
                <div className="w-72 h-24 left-[24.99px] top-[968px] absolute" />
                <div className="w-72 h-16 left-[24px] top-[66px] absolute inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Group Name *</div>
                    </div>
                    <input
                        type="text"
                        name="group-name"
                        //value={formData.groupName}
                        onChange={handleChange}
                        placeholder="e.g. Data 8 Freshman"
                        className="self-stretch h-10 px-4 py-2 rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300 inline-flex justify-start items-center overflow-hidden"
                    />
                </div>
                <div className="w-72 h-16 left-[24px] top-[149.28px] absolute inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Class/Subject *</div>
                    </div>
                    <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        placeholder="e.g. CS61A"
                        className="self-stretch h-10 px-4 py-2 rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300 inline-flex justify-start items-center overflow-hidden"
                    />
                </div>
                <div className="w-72 left-[24px] top-[232.56px] absolute inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Description *</div>
                    </div>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe the purpose and goals of your study group..."
                        className="self-stretch px-4 py-2 rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300 inline-flex justify-start items-start overflow-hidden"
                    />
                </div>
                <div className="w-72 h-16 left-[24px] top-[364px] absolute inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Group Size</div>
                    </div>
                    <input
                        type="number"
                        name="group-size"
                        value={formData.groupSize}
                        onChange={handleChange}
                        className="self-stretch h-15 relative bg-white rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300"
                    />
                </div>
                <div className="w-72 h-16 left-[24px] top-[448.05px] absolute inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Meeting Type</div>
                    </div>
                    <input
                        type="text"
                        name="meeting-type"
                        //value={formData.meetingType}
                        onChange={handleChange}
                        className="self-stretch h-15 relative bg-white rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300"
                    />
                </div>
                <div className="w-72 h-16 left-[24px] top-[532.10px] absolute inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Privacy</div>
                    </div>
                    <input
                        type="text"
                        name="privacy"
                        //value={formData.privacy}
                        onChange={handleChange}
                        className="self-stretch h-15 relative bg-white rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300"
                    />
                </div>
                <div className="w-72 h-16 left-[24px] top-[616.15px] absolute inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Location *</div>
                    </div>
                    <input
                        type="text"
                        name="location"
                        //value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Moffit Library / Zoom"
                        className="self-stretch pl-3 h-15 relative bg-white rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300"
                    />
                </div>
                <div className="w-72 h-16 left-[24px] top-[699.43px] absolute inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Meeting Day(s) *</div>
                    </div>
                    <input
                        type="text"
                        name="meeting-day"
                        //value={formData.meetingDay}
                        onChange={handleChange}
                        placeholder="e.g. Mon & Wed"
                        className="self-stretch pl-3 h-15 relative bg-white rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300"
                    />
                </div>
                <div className="w-72 h-16 left-[24px] top-[782.71px] absolute inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Meeting Time *</div>
                    </div>
                    <input
                        type="text"
                        name="meeting-time"
                        value={formData.availability}
                        onChange={handleChange}
                        placeholder="e.g. 4-6 PM"
                        className="self-stretch pl-3 h-15 relative bg-white rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300"
                    />
                </div>
                <div className="w-72 h-16 left-[24px] top-[865.99px] absolute inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                        <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Maximum Members</div>
                    </div>
                    <input
                        type="number"
                        name="max-members"
                        //value={formData.maxMembers}
                        onChange={handleChange}
                        className="self-stretch h-15 relative bg-white rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300"
                    />
                </div>
                <div data-property-1="Default" className="w-72 h-12 left-[23px] top-[1022px] absolute">
                    <div className="w-72 h-12 left-0 top-0 absolute bg-amber-100 rounded-[50px]">
                        <button
                            type="button"
                            onClick={() => setFormData({
                                course: "",
                                pace: "",
                                noiseLevel: "",
                                groupSize: 0,
                                meetingType: "",
                                availability: "",
                                vibe: "",
                                method: "",
                                description: "",
                                creator: ""
                            })}
                            className="w-72 h-12 bg-amber-100 rounded-[50px]">
                            Cancel
                        </button>
                    </div>
                </div>
                <div data-property-1="Default" className="w-72 h-12 left-[25px] top-[963px] absolute">
                    <button
                        type="submit"
                        className="w-72 h-12 bg-sky-950 text-white rounded-[50px]">
                        Confirm
                    </button>
                </div>
            </div>
            <div className="w-16 h-6 left-[17px] top-[132px] absolute inline-flex justify-start items-center gap-2">
                <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-1.5 h-3.5 left-[5px] top-[5px] absolute outline outline-2 outline-offset-[-1px] outline-sky-950" />
                    <div className="w-3.5 h-0 left-[5px] top-[12px] absolute outline outline-2 outline-offset-[-1px] outline-sky-950" />
                </div>
                <div className="flex-1 h-6 flex justify-start items-start">
                    <button
                        type="button"
                        className="text-center justify-start text-sky-950 text-base font-medium font-['Jost'] leading-6">
                        Back
                    </button>
                </div>
            </div>
        </div>
        </form>                       
    );
}