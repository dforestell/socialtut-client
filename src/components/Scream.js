import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//mui stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex"
  }
};

class Scream extends Component {
  render() {
    console.log("made it here");
    const {
      classes,
      scream: {
        body,
        createdAt,
        userHandle,
        userImage,
        screamId,
        likeCount,
        commentCount
      }
    } = this.props;
    console.log(body);
    return (
      <Card>
        <CardMedia image={userImage} title="Profile Image" />
        <CardContent>
          <Typography variant="h5">{userHandle} </Typography>
          <Typography variant="body2" color="textSecondary">
            {createdAt}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Scream);
