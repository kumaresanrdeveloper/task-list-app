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

![image-1](./img/image-1.png)

---

Enter text to the input field the add button will be enabled

![image-2](./img/image-2.png)

---

click the add button and see the task list

![image-3](./img/image-3.png)

---

you can Edit the text by clicking the Edit button

![image-4](./img/image-4.png)

---

if the task is done then click check box or text

![image-5](./img/image-5.png)

---

if you don't want the task then delete the task by clicking the delete button

![image-6](./img/image-6.png)

---

## Extra

Want Initial Tasks then add **initialTasks** to App.js tasks useState()

```react
const [tasks, setTasks] = useState(initialTasks);
```
