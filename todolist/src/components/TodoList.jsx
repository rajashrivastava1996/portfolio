"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";

export default function TodoList() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || desc.trim() === "") {
      alert("Please fill out both the title and description!");
      return;
    }
    setMainTask([...mainTask, { title, desc, status: "pending" }]);
    setTitle("");
    setDesc("");
  };

  const toggleStatus = (i) => {
    const updatedTasks = [...mainTask];
    updatedTasks[i].status =
      updatedTasks[i].status === "completed" ? "pending" : "completed";
    setMainTask(updatedTasks);
  };

  const deleteHandler = (i) => {
    const updatedTasks = [...mainTask];
    updatedTasks.splice(i, 1);
    setMainTask(updatedTasks);
  };

  let renderTask = (
    <h2 className="text-gray-500 text-lg text-center">No Task Available</h2>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <div key={i} className="space-y-4">
        <div className="hidden md:grid md:grid-cols-12 gap-4 pb-2 border-b border-gray-200">
          <div className="col-span-3 text-gray-500 font-medium">Title</div>
          <div className="col-span-3 text-gray-500 font-medium">
            Description
          </div>
          <div className="col-span-3 text-gray-500 font-medium text-center">
            Status
          </div>
          <div className="col-span-3 text-gray-500 font-medium text-end">
            Close
          </div>
        </div>
        <li className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
          <div className="w-full md:w-2/3 flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-sm">{t.desc}</h6>
            <div className="flex justify-center">
              <Badge
                variant="secondary"
                aria-label={`Mark task as ${
                  t.status === "completed" ? "pending" : "completed"
                }`}
                className={`cursor-pointer px-4 py-1 rounded-full text-white font-medium ${
                  t.status === "completed"
                    ? "bg-teal-400 hover:bg-teal-500"
                    : "bg-teal-300 hover:bg-teal-400"
                }`}
                onClick={() => toggleStatus(i)}
              >
                {t.status === "completed" ? "Completed" : "Pending"}
              </Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => deleteHandler(i)}
            className="text-orange-400 hover:text-orange-600 hover:bg-orange-50"
            aria-label="Delete task"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </li>
      </div>
    ));
  }

  return (
    <div className="min-h-screen bg-[url(/bg.jpg)] bg-cover bg-center  p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold bg-red-400 p-6 rounded-xl text-white">
            TODO LIST
          </h1>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
          <form onSubmit={submitHandler} className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter Your Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-0 border-b-2 border-gray-300 rounded-none px-0 py-3 text-lg placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-600"
              />
              <Input
                type="text"
                placeholder="Enter Your Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full border-0 border-b-2 border-gray-300 rounded-none px-0 py-3 text-lg placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-600"
              />
              <div className="flex justify-center">
                <Button className="w-full md:w-auto bg-orange-400 hover:bg-orange-500 text-white px-8 py-2 rounded-lg font-medium">
                  Add Task
                </Button>
              </div>
            </div>
          </form>
          <div>
            <ul>{renderTask}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
