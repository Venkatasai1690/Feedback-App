// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  setIsFeedbackSelected = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div className="feedback-question-container">
        <h1 className="question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-container">
          {emojis.map(eachEmoji => (
            <li
              key={eachEmoji.id}
              className="emoji-item"
              onClick={this.setIsFeedbackSelected}
            >
              <img
                src={eachEmoji.imageUrl}
                alt={eachEmoji.name}
                className="image"
              />
              <p className="name">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackSummary = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData

    return (
      <div className="feedback-summary-container">
        <img src={loveEmojiUrl} alt="loveEmoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="feedback-summary">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    // const {feedbackData} = this.props
    // const {emojis} = feedbackData

    return (
      <div className="app-container">
        <div className="feedback-container">
          {isFeedbackSelected
            ? this.renderFeedbackSummary()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
