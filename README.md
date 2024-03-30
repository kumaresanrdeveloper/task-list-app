# Task List App

Hi all, this task list app is made up of Vite + React.

You can use this as your daily task reminder aswell.

first you need to **clone** the Repositorie by using the command

```node
git clone https://github.com/kumaresanrdeveloper/task-list-app
cd task-list-app
```

and than you need to install node-modules by using the command

```node
npm install
```

if its not installed then add **_--force_**

```node
npm install --force
```

now start the app by using the command

```node
npm run dev
```

now your app is ready to view

## Initial

you can see initially the add button will be disable state.

![image-1](https://github.com/kumaresanrdeveloper/task-list-app/assets/162865903/aafc8d3e-6017-4ebe-b5ec-5f85fab71f02)


---

Enter text to the input field the add button will be enabled

![image-2](https://github.com/kumaresanrdeveloper/task-list-app/assets/162865903/07792961-e051-4c88-af17-dd76d102c1b0)


---

click the add button and see the task list

![image-3](https://github.com/kumaresanrdeveloper/task-list-app/assets/162865903/0636358d-bead-4ff6-817a-0dc47021655a)


---

you can Edit the text by clicking the Edit button

![image-4](https://github.com/kumaresanrdeveloper/task-list-app/assets/162865903/cb8a21f4-017f-4aba-9076-b2c1c3dca43d)


---

if the task is done then click check box or text

![image-5](https://github.com/kumaresanrdeveloper/task-list-app/assets/162865903/4ffde5c9-f221-443a-ade1-0a48c452e7db)


---

if you don't want the task then delete the task by clicking the delete button

![image-6](https://github.com/kumaresanrdeveloper/task-list-app/assets/162865903/8e6404f6-0ec1-4d25-8622-7d458c07f435)


---

## Extra

Want Initial Tasks then add **initialTasks** to App.js tasks useState()

```react
const [tasks, setTasks] = useState(initialTasks);
```
![image-7](https://github.com/kumaresanrdeveloper/task-list-app/assets/162865903/07997d32-9fdb-47cf-b3be-85c93768c8d0)
