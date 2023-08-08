import './Reviews.css';

export function Reviews(props) {
    return (
        <div className="ratingsTable">
            <table className='actualRatingsTable'>
                <tbody>
                    <tr className='row'>
                        <td className='key tableData'>Date</td>
                        <td className='value tableData'>{props.ratings["date"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating</td>
                        <td className='value tableData'>{props.ratings["rating"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Score</td>
                        <td className='value tableData'>{props.ratings["ratingScore"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Recommendation</td>
                        <td className='value tableData'>{props.ratings["ratingRecommendation"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details DCF Score</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsDCFScore"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details DCF Recommendation</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsDCFRecommendation"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details ROE Score</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsROEScore"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details ROE Recommendation</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsROERecommendation"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details ROA Score</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsROAScore"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details ROA Recommendation</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsROARecommendation"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details DE Score</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsDEScore"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details DE Recommendation</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsDERecommendation"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details PE Score</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsPEScore"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details PE Recommendation</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsPERecommendation"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details PB Score</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsPBScore"]}</td>
                    </tr>
                    <tr className='row'>
                        <td className='key tableData'>Rating Details PE Recommendation</td>
                        <td className='value tableData'>{props.ratings["ratingDetailsPBRecommendation"]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
