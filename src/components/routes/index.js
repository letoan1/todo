import HomePage from '../../pages/Home';
import AboutPage from '../../pages/About';
import NewTaskPage from '../../pages/NewTask';
import DoingTaskPage from '../../pages/DoingTask';
import CreateTask from '../../pages/CreateTask';
import EditPage from '../../pages/Edit';
import DoneTask from '../../pages/DoneTask';

import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';

export default function RouterTodo() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Switch location={location} key={location.key}>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/create">
                        <CreateTask />
                    </Route>
                    <Route path="/edit/:id">
                        <EditPage />
                    </Route>
                    <Route path="/new">
                        <NewTaskPage />
                    </Route>
                    <Route path="/doing">
                        <DoingTaskPage />
                    </Route>
                    <Route path="/done">
                        <DoneTask />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    );
}
