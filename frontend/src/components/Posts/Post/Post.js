import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

function Post({ post, setCurrentId }) {
    // the useStyles hook uses the styles from 
    // the corresponding makestyles hook from
    // ./styles
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            {/* header image */}
            <CardMedia component="div" className={classes.media} image={post.selectedFile} title={post.title}/>
            {/* Name and timestamp */}
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {/* ... button */}
            <div className={classes.overlay2}>
                <Button style={{color: "white"}} 
                        size="small" 
                        onClick={() => setCurrentId(post._id)}
                >
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            {/* bottom section of the post under the image */}
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            {/* title of the post */}
            <Typography className={classes.title} gutterBottom variant="h5">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like{' '}
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post