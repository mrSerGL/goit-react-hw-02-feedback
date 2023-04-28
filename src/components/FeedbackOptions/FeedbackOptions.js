import css from './FeedbackOptions.module.css';
function FeedbackOptions(){
return (
<>
<ul className={css.buttons__list}>
    <li className={css.button}><button type="button">Good</button></li>
    <li className={css.button}><button type="button">Neutral</button></li>
    <li className={css.button}><button type="button">Bad</button></li>
</ul>

</>
);
};

export default FeedbackOptions;