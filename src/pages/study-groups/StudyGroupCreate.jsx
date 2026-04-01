import {studyGroups as initialGroups} from "../../data/studyGroups";
import React, { useState } from "react";

export default function StudyGroupCreate() {
    const [groups, setGroups] = useState(initialGroups)

    const [formData, setFormData] = useState({
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

    <div className="w-96 h-[1322px] relative bg-[radial-gradient(ellipse_46.26%_50.91%_at_50.00%_51.77%,_#FFB000_0%,_#FFB000_22%,_#FFB000_42%,_#FFDC90_81%,_#FFECC1_100%)] overflow-hidden">
        <div className="w-48 h-16 left-[17px] top-[60px] absolute justify-start text-black text-5xl font-normal font-['Marcellus_SC']">Huddle</div>
        <div className="w-96 h-[874px] left-[424px] top-[7px] absolute bg-Cal-Blue overflow-hidden">
            <div className="w-96 h-28 left-[41px] top-[186px] absolute justify-start text-black text-8xl font-normal font-['Inter']">Huddle</div>
            <div className="w-80 h-24 left-[55px] top-[336px] absolute bg-Cal-Gold" />
            <div className="w-80 h-24 left-[55px] top-[336px] absolute bg-Cal-Gold" />
            <div className="w-80 h-24 left-[56px] top-[448px] absolute bg-Cal-Gold" />
            <div className="w-52 h-16 left-[124px] top-[354px] absolute justify-start text-black text-5xl font-normal font-['Inter']">Sign in</div>
            <div className="w-52 left-[121px] top-[469px] absolute justify-start text-black text-5xl font-normal font-['Inter']">Sign up</div>
        </div>
        <img className="w-14 h-14 left-[328px] top-[60px] absolute rounded-[511px]" src="https://placehold.co/55x55" />
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
                <div className="self-stretch h-10 px-4 py-2 rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300 inline-flex justify-start items-center overflow-hidden">
                    <div className="justify-start text-neutral-950/50 text-sm font-normal font-['Jost']">e.g., Data 8 Freshmen</div>
                </div>
            </div>
            <div className="w-72 h-16 left-[24px] top-[149.28px] absolute inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-5 inline-flex justify-start items-start">
                    <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Class/Subject *</div>
                </div>
                <div className="self-stretch h-10 px-4 py-2 rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300 inline-flex justify-start items-center overflow-hidden">
                    <div className="justify-start text-neutral-950/50 text-sm font-normal font-['Jost']">e.g., CS 61A</div>
                </div>
            </div>
            <div className="w-72 h-28 left-[24px] top-[232.56px] absolute inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-5 inline-flex justify-start items-start">
                    <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Description *</div>
                </div>
                <div className="self-stretch h-20 px-4 py-2 rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300 inline-flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-neutral-950/50 text-sm font-normal font-['Jost'] leading-5">Describe the purpose and goals of your study group...</div>
                </div>
            </div>
            <div className="w-72 h-16 left-[24px] top-[364px] absolute inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-5 inline-flex justify-start items-start">
                    <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Group Size</div>
                </div>
                <div className="self-stretch h-10 relative bg-white rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300">
                    <div className="w-0 h-0 left-[-55.99px] top-[-520.97px] absolute" />
                    <div className="w-0 h-0 left-[-55.99px] top-[-520.97px] absolute" />
                    <div className="w-0 h-0 left-[-55.99px] top-[-520.97px] absolute" />
                </div>
            </div>
            <div className="w-72 h-16 left-[24px] top-[448.05px] absolute inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-5 inline-flex justify-start items-start">
                    <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Meeting Type</div>
                </div>
                <div className="self-stretch h-10 relative bg-white rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300">
                    <div className="w-0 h-0 left-[-55.99px] top-[-605.02px] absolute" />
                    <div className="w-0 h-0 left-[-55.99px] top-[-605.02px] absolute" />
                    <div className="w-0 h-0 left-[-55.99px] top-[-605.02px] absolute" />
                </div>
            </div>
            <div className="w-72 h-16 left-[24px] top-[532.10px] absolute inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-5 inline-flex justify-start items-start">
                    <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Privacy</div>
                </div>
                <div className="self-stretch h-10 relative bg-white rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300">
                    <div className="w-0 h-0 left-[-55.99px] top-[-689.07px] absolute" />
                    <div className="w-0 h-0 left-[-55.99px] top-[-689.07px] absolute" />
                </div>
            </div>
            <div className="w-72 h-16 left-[24px] top-[616.15px] absolute inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-5 inline-flex justify-start items-start">
                    <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Location *</div>
                </div>
                <div className="self-stretch h-10 px-4 py-2 rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300 inline-flex justify-start items-center overflow-hidden">
                    <div className="justify-start text-neutral-950/50 text-sm font-normal font-['Jost']">e.g., Moffitt Library / Zoom</div>
                </div>
            </div>
            <div className="w-72 h-16 left-[24px] top-[699.43px] absolute inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-5 inline-flex justify-start items-start">
                    <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Meeting Day(s) *</div>
                </div>
                <div className="self-stretch h-10 px-4 py-2 rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300 inline-flex justify-start items-center overflow-hidden">
                    <div className="justify-start text-neutral-950/50 text-sm font-normal font-['Jost']">e.g., Mon &amp; Wed</div>
                </div>
            </div>
            <div className="w-72 h-16 left-[24px] top-[782.71px] absolute inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-5 inline-flex justify-start items-start">
                    <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Meeting Time *</div>
                </div>
                <div className="self-stretch h-10 px-4 py-2 rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300 inline-flex justify-start items-center overflow-hidden">
                    <div className="justify-start text-neutral-950/50 text-sm font-normal font-['Jost']">e.g., 4-6 PM</div>
                </div>
            </div>
            <div className="w-72 h-16 left-[24px] top-[865.99px] absolute inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-5 inline-flex justify-start items-start">
                    <div className="flex-1 justify-start text-black text-sm font-medium font-['Jost'] leading-5">Maximum Members</div>
                </div>
                <div className="self-stretch h-10 px-4 py-2 rounded-[10px] outline outline-[0.66px] outline-offset-[-0.66px] outline-gray-300 inline-flex justify-start items-center overflow-hidden">
                    <div className="justify-start text-neutral-950 text-sm font-normal font-['Jost'] leading-5">10</div>
                </div>
            </div>
            <div data-property-1="Default" className="w-72 h-12 left-[23px] top-[1022px] absolute">
                <div className="w-72 h-12 left-0 top-0 absolute bg-amber-100 rounded-[50px]">
                    <div className="left-[110px] top-[9px] absolute text-center justify-start text-Cal-Blue text-xl font-semibold font-['Jost'] leading-8">Cancel</div>
                </div>
            </div>
            <div data-property-1="Default" className="w-72 h-12 left-[25px] top-[963px] absolute">
                <div className="w-72 h-12 left-0 top-0 absolute">
                    <div className="w-72 h-12 left-0 top-0 absolute bg-sky-950/95 rounded-[50px]" />
                </div>
                <div className="w-48 h-6 left-[45.03px] top-[12.22px] absolute text-center justify-center text-white text-xl font-semibold font-['Jost'] leading-8">Confirm</div>
            </div>
        </div>
        <div className="w-16 h-6 left-[17px] top-[132px] absolute inline-flex justify-start items-center gap-2">
            <div className="w-6 h-6 relative overflow-hidden">
                <div className="w-1.5 h-3.5 left-[5px] top-[5px] absolute outline outline-2 outline-offset-[-1px] outline-sky-950" />
                <div className="w-3.5 h-0 left-[5px] top-[12px] absolute outline outline-2 outline-offset-[-1px] outline-sky-950" />
            </div>
            <div className="flex-1 h-6 flex justify-start items-start">
                <div className="text-center justify-start text-sky-950 text-base font-medium font-['Jost'] leading-6">Back</div>
            </div>
        </div>
    </div>
}